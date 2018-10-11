/**
 * router 文件 
 * 自动将 controllers 目录中的文件加载到路由中
 */
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

const routerTmp = function (dir = '../controllers') {
    const router = new Router();
    const controllersDir = dir;

    
    fs.readdirSync(path.join(__dirname, controllersDir)).filter(f => {
        return f.endsWith('.js');
    }).forEach(f => {
        const mapping = require(path.join(__dirname, controllersDir, f));
        for (let url in mapping) {
            if (url.startsWith('GET ')) {
                const path = url.substring(4);
                router.get(path, mapping[url]);
            } else if (url.startsWith('POST ')) {
                const path = url.substring(5);
                router.post(path, mapping[url]);
            } else if (url.startsWith('PUT ')) {
                const path = url.substring(4);
                router.put(path, mapping[url]);
            } else if (url.startsWith('DELETE ')) {
                const path = url.substring(7);
                router.del(path, mapping[url]);
            } else {
                console.log(`invalid path: ${url}`);
            }
        }
    });

    return router.routes();
};
module.exports = routerTmp;