module.exports = (sequelize, dataTypes) => {
    return sequelize.define('area', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        country_id: {
            type: dataTypes.INTEGER
        },
        code: {
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        cname: {
            type: dataTypes.STRING
        },
        lower_name: {
            type: dataTypes.STRING
        }
    }, {
        sequelize,
        timestamps: false
    })
}