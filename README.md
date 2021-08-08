# 🍀 eco
> Make your minecraft server with intelligence!

![](./view/src/assets/social-preview.png)

## 快速启动

1. 克隆本仓库，或者 [下载源码压缩包](https://github.com/ElaBosak233/eco/archive/refs/heads/main.zip) 并解压
```bash
git clone https://github.com/ElaBosak233/eco.git
```

2. 使用 NPM/YARN 下载、安装依赖
```bash
npm install
```

3. 使用 NPM/YARN 运行
```bash
npm run start
```

## 配置文件

### `eco.config.json`

```json5
{
  "port": {
    "eco_vite": 3000, // 前端 vite 端口
    "eco_express": 3001 // 后端 express 端口
  },
  "server": {
    "cwd": "F:\\Minecraft\\eco", // Minecraft 服务器工作根目录，所有的服务器都会在此创建
    "docker": true // 默认启用 Docker 实现虚拟化
  }
}
```
