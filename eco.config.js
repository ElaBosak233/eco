module.exports = {
    port: {
        eco_vite: 3000, // 给 eco 前端提供的端口，Nginx 需要反向代理此端口
        eco_express: 3001 // 给 eco 后端提供的端口，由于后端涉及文件读写等安全操作，请不要允许任何跨域请求访问此端口
    }
}