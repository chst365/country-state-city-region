const Sequelize = require('sequelize')
const CityModel = require('./model/city')
const AreaModel = require('./model/area')
const CountryModel = require('./model/country')
const ContinentModel = require('./model/continent')
const StateModel = require('./model/state')
const RegionModel = require('./model/region')

const sequelize = new Sequelize('world_city', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
})


sequelize
    .authenticate()
    .then(() => { console.log('success') })
    .catch(() => { console.log('error') })
const Continent = ContinentModel(sequelize, Sequelize.DataTypes)
const City = CityModel(sequelize, Sequelize.DataTypes)
const Country = CountryModel(sequelize, Sequelize.DataTypes)
const Area = AreaModel(sequelize, Sequelize.DataTypes)
const State = StateModel(sequelize, Sequelize.DataTypes)
const Region = RegionModel(sequelize, Sequelize.DataTypes)

// Continent.sync()
// City.sync()
// Country.sync()
// Area.sync()
// State.sync()
Continent.hasMany(Country, { foreignKey: 'id', as: 'countries' })
// Country.belongsTo(Continent, { foreignKey: 'continent_id', targetKey: 'id' });
Country.hasMany(Area, { foreignKey: 'id', as: 'areas' })

Country.hasMany(State, { foreignKey: 'id', as: 'states' })

Area.hasMany(State, { foreignKey: 'id', as: 'states' })

State.hasMany(City, { foreignKey: 'id', as: 'cities' })

City.hasMany(Region, { foreignKey: 'id', as: 'regions' })

// City.hasMany(Region, { foreignKey: 'id', as: 'regions' })
// Area.belongsTo(Country);
// Country.hasMany(Area)
// Area.hasMany(State)
// Country.hasMany(State)
// State.hasMany(City)

sequelize.Continent = Continent
sequelize.City = City
sequelize.Country = Country
sequelize.Area = Area
sequelize.State = State
sequelize.Region = Region

module.exports = sequelize