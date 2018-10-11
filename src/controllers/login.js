

module.exports = {
    'POST /login': async (ctx, next) => {
        const user = ctx.request.body;

        ctx.response.status = 200;
        ctx.response.body = `登陆成功: ${JSON.stringify(user, null, 4)}`;
        console.log('登陆信息: ' + user);
    }
}