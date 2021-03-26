module.exports = (sequelize, dataTypes) => {
    return sequelize.define('countries', {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        continent_id: {
            type: dataTypes.INTEGER
        },
        code: {
            type: dataTypes.STRING(3),
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50)
        },
        full_name: {
            type: dataTypes.STRING
        },
        cname: {
            type: dataTypes.STRING
        },
        lower_name: {
            type: dataTypes.STRING
        },
        remark: {
            type: dataTypes.TEXT
        }
    }, {
        sequelize,
        timestamps: false
    })
}