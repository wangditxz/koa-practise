module.exports = (sequelize, DataTypes) => {
    return sequelize.define('pet', {
        id: {
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        name: DataTypes.STRING(100),
        gender: DataTypes.BOOLEAN,
        birth: DataTypes.STRING(10),
        createdAt: DataTypes.BIGINT,
        updatedAt: DataTypes.BIGINT,
        version: DataTypes.BIGINT
    });
};