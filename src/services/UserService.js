const { Pet, User } = require('../models');


const saveUser = async params => {
    const user = new User();
    const { username, password } = params;

    user.username = username;
    user.password = password;
  
    return user.save();
};
const getUser = async username => {
    if (!username) {
        throw new Error('param should include username!');
    }
    const user = await User.findOne({ where: { username }});
    return user;
}


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
    registerPet,
    saveUser,
    getUser
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