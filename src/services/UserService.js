const { Pet } = require('../models');

let registerPet = async params => {
    const now = Date.now();
    console.log('-------------', now);
    let dog = await Pet.create({
        id: now,
        name: 'wd',
        gender: false,
        birth: '2001-01-01',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(dog));
    return JSON.stringify(dog);
};

module.exports = {
    registerPet
};
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