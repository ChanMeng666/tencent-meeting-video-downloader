# 腾讯会议录制下载器

[English README](./README.md)

一个帮助你轻松下载腾讯会议录制视频的 Chrome 浏览器扩展程序。

## 功能特点

- 🎯 自动检测腾讯会议回放页面中的视频链接
- 📂 支持自定义视频保存路径
- 🚀 生成可靠的 curl 下载命令
- 💻 清爽直观的用户界面
- 🔒 安全可靠，不收集用户数据

## 安装方法

1. 下载本项目的最新发布版本
2. 打开 Chrome 浏览器，进入扩展程序页面（`chrome://extensions/`）
3. 在右上角启用"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择已解压的插件文件夹

## 使用说明

1. 打开腾讯会议录制回放页面
2. 点击工具栏中的插件图标
3. 等待插件检测视频链接
4. 输入期望的视频保存路径（包括文件名，例如：`D:/meeting_video.mp4`）
5. 点击"生成下载命令"
6. 复制生成的 curl 命令
7. 在 Git Bash 中执行该命令开始下载

## 开发指南

### 环境要求

- Node.js >= 14
- Git Bash（用于执行下载命令）

### 项目设置

```bash
# 克隆项目
git clone https://github.com/your-username/tencent-meeting-video-downloader.git

# 安装依赖
npm install

# 开发构建
npm run watch

# 生产构建
npm run build
```

### 项目结构

```
├── src/
│   ├── assets/    # 图标和静态资源
│   ├── background/# 后台脚本
│   ├── content/   # 内容脚本
│   ├── popup/     # 弹窗相关文件
│   └── utils/     # 工具函数
├── dist/          # 构建输出目录
├── manifest.json  # 扩展程序配置文件
├── webpack.config.js # Webpack 配置
└── package.json   # 项目配置文件
```

## 注意事项

- 本插件仅供学习和个人使用
- 请遵守相关服务条款和规定
- 下载的视频仅供个人观看，请勿传播

## 技术栈

- JavaScript (ES6+)
- Chrome Extension API
- Webpack
- CSS3

## 开源协议

MIT License

## 贡献指南

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/AmazingFeature`）
3. 提交更改（`git commit -m '添加某个特性'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 提交 Pull Request

## 联系方式

如有问题或建议，请提交 Issue。

## 作者

**Chan Meng**

- LinkedIn: [chanmeng666](https://www.linkedin.com/in/chanmeng666/)
- GitHub: [ChanMeng666](https://github.com/ChanMeng666)

