const { registerPet } = require('../services/UserService');

module.exports = {
    'POST /login': async (ctx, next) => {
        const user = ctx.request.body;
        if (user.username && user.password) {
            registerPet();
            ctx.response.status = 200;
            ctx.response.body = `登陆成功: ${JSON.stringify(user, null, 4)}`;
            console.log('登陆信息: ' + user);
        } else {
            ctx.response.status = 412;
            // ctx.body = statusCode.ERROR_412('创建失败，参数错误');
        }
    }
}