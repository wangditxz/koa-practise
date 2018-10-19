module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNUll: false,
            primaryKey: true,
            autoIncrement: true,
            comment: '用户 id'
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true, // 唯一性约束
            comment: '账号'
          },
          password: {
            type: DataTypes.STRING(64),
            allowNull: false,
            comment: '密码'
          }
    },
    {
        timestamps: false,
        comment: '用户表',
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};