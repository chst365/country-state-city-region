module.exports = function (sequelize, dataTypes) {
    return sequelize.define('continents', {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(16)
        },
        cname: {
            type: dataTypes.STRING(16)
        },
        lower_name: {
            type: dataTypes.STRING
        }
    }, {
        sequelize,
        timestamps: false
    })
}