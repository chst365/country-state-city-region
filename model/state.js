module.exports = (sequelize, dataTypes) => {
    return sequelize.define('states', {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        country_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        code: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        },
        cname: {
            type: dataTypes.STRING
        },
        lower_name: {
            type: dataTypes.STRING
        },
        code_full: {
            type: dataTypes.STRING
        },
        area_id: {
            type: dataTypes.INTEGER
        }
    }, {
        sequelize,
        timestamps: false
    })
}