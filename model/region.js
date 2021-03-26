module.exports = (sequelize, dataTypes) => {
    return sequelize.define('regions', {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        city_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        code: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        },
        cname: {
            type: dataTypes.STRING(50)
        },
        lower_name: {
            type: dataTypes.STRING
        },
        code_full: {
            type: dataTypes.STRING(12)
        }
    }, {
        sequelize,
        timestamps: false
    })
}