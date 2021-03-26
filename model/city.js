module.exports = (sequelize, dataTypes) => {
    return sequelize.define('cities', {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        state_id: {
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
            type: dataTypes.STRING(9)
        }
    }, {
        sequelize,
        timestamps: false
    })
}