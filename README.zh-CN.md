# 腾讯会议录制下载器

[English README](./README.md)

一个帮助你轻松下载腾讯会议录制视频的 Chrome 浏览器扩展程序。

## 功能特点

- 🎯 自动检测腾讯会议回放页面中的视频链接
- 📂 支持自定义视频保存路径
- 🚀 生成可靠的 curl 下载命令
- 💻 清爽直观的用户界面
- 🔒 安全可靠，不收集用户数据

## 安装指南

### 方法一：直接安装（推荐普通用户使用）

1. 下载最新版本
   - 访问[发布页面](https://github.com/ChanMeng666/tencent-meeting-video-downloader/releases)
   - 下载最新的 `tencent-meeting-video-downloader.zip` 文件

2. 准备 Chrome 浏览器
   - 打开 Chrome 浏览器
   - 在地址栏输入 `chrome://extensions/` 并回车
   - 点击右上角的开关启用"开发者模式"

3. 安装扩展程序
   - 解压下载的 `tencent-meeting-video-downloader.zip` 文件
   - 点击 Chrome 扩展页面中的"加载已解压的扩展程序"按钮
   - 选择解压后的文件夹
   - 现在你应该能够在 Chrome 工具栏看到拓展程序图标了

### 方法二：从源码安装（面向开发者）

1. 准备工作
   - 安装 [Node.js](https://nodejs.org/)（14版本或更高）
   - 安装 [Git](https://git-scm.com/downloads)
   - 安装 [Git Bash](https://git-scm.com/downloads)（Windows版Git自带）

2. 克隆和构建
   ```bash
   # 克隆仓库
   git clone https://github.com/ChanMeng666/tencent-meeting-video-downloader.git
   
   # 进入项目目录
   cd tencent-meeting-video-downloader
   
   # 安装依赖
   npm install
   
   # 构建扩展程序
   npm run build
   ```

3. 加载扩展程序
   - 打开 Chrome，访问 `chrome://extensions/`
   - 启用"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择项目目录中的 `dist` 文件夹

## 使用指南

1. 准备会议录制视频
   - 在 Chrome 中打开腾讯会议录制回放页面
   - 开始播放要下载的视频

2. 使用扩展程序
   - 点击 Chrome 工具栏中的扩展程序图标
   - 等待出现"检测到视频"的提示
   - 输入你想要保存的路径（例如：`D:/Videos/meeting_recording.mp4`）
   - 点击"生成下载命令"

3. 下载视频
   - 点击"复制命令"按钮
   - 打开 Git Bash
   - 右键选择"粘贴"以粘贴命令
   - 按回车键开始下载
   - 等待下载完成

4. 验证下载
   - 检查指定的保存位置
   - 尝试播放下载的视频以确保正常工作

## 常见问题解决

常见问题及解决方案：

1. 扩展程序无法检测到视频
   - 确保视频正在播放
   - 刷新页面重试

2. 下载命令不工作
   - 验证 Git Bash 是否正确安装
   - 检查保存路径是否有效
   - 确保你有保存位置的写入权限

3. 视频播放问题
   - 尝试使用 VLC 播放器
   - 检查下载是否完整完成

## 开发指南

### 环境要求

- Node.js >= 14
- Git Bash（用于执行下载命令）

### 项目设置

```bash
# 克隆项目
git clone https://github.com/ChanMeng666/tencent-meeting-video-downloader.git

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

