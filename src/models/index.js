/**
 * 初始化 Sequelize 对象 进行 database 配置
 */
const Sequelize = require('sequelize');
const db_config = require('../config');

var sequelize = new Sequelize(
    db_config.database,
    db_config.username,
    db_config.password,
    {
        host: db_config.host,
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timestamps: false
    });

/**
 * 导入模型
 */
let Pet = sequelize.import('./Pet.js');
/**
 * 同步模型到数据库
 */
sequelize.sync();

console.log(`
******************
${JSON.stringify(sequelize.models, null, 4)}
******************
`);
// const now = Date.now();
// makedog = async () => {
//     let dog = await Pet.create({
//         id: now,
//         name: 'wd',
//         gender: false,
//         birth: '2001-01-01',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('created: ' + JSON.stringify(dog));
// };
// makedog();

module.exports = {
    sequelize,
    Sequelize,
    Pet
}