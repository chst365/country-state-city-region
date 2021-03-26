const path = require('path')
const express = require('express')
const app = express()
const { Continent, Country, Area, State, City, Region } = require('./sequelize')
app.get('/get', function (req, res) {
    Continent.findAll({
        attributes: [['id', 'continentId'], ['cname', 'continentName']],
        order: ['id'],
        include: [{
            association: Continent.hasMany(Country, {
                foreignKey: 'continent_id',
            }),
            order: ['id'],
            attributes: [['id', 'countryId'], ['cname', 'countryName']],
            include: [
                {
                    association: Country.hasMany(Area, {
                        foreignKey: 'country_id',
                    }),
                    attributes: [['id', 'areaId'], ['cname', 'areaName']],
                    include: [{
                        association: Area.hasMany(State, {
                            foreignKey: 'area_id',
                        }),
                        attributes: [['id', 'stateId'], ['cname', 'stateName']],
                        include: [{
                            association: State.hasMany(City, {
                                foreignKey: 'state_id',
                            }),
                            attributes: [['id', 'cityId'], ['cname', 'cityName']],
                            include: [{
                                association: City.hasMany(Region, {
                                    foreignKey: 'city_id',
                                }),
                                attributes: [['id', 'regionId'], ['cname', 'regionName']],
                            }]
                        }]
                    }]
                },
                {
                    association: Country.hasMany(State, {
                        foreignKey: 'country_id',
                    }),
                    attributes: [['id', 'stateId'], ['cname', 'stateName']],
                    include: [{
                        association: State.hasMany(City, {
                            foreignKey: 'state_id',
                        }),
                        attributes: [['id', 'cityId'], ['cname', 'cityName']],
                        include: [{
                            association: City.hasMany(Region, {
                                foreignKey: 'city_id',
                                targetKey: 'id'
                            }),
                            attributes: [['id', 'regionId'], ['cname', 'regionName']],
                        }]
                    }]
                }]
        }]
    })
        .then((continent) => res.status(300).send(continent))
        .catch((error) => res.status(500).send(error))
})

app.listen(8080, function () {
    console.log('server start');
});