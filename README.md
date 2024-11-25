# Tencent Meeting Recording Downloader

[中文文档](./README.zh-CN.md)

A Chrome browser extension that helps you easily download Tencent Meeting recording videos.

## Features

- 🎯 Automatically detect video URLs on Tencent Meeting playback pages
- 📂 Support custom video save paths
- 🚀 Generate reliable curl download commands
- 💻 Clean and intuitive user interface
- 🔒 Secure and reliable, no user data collection

## Installation

1. Download the latest release of this project
2. Open Chrome browser, go to extensions page (`chrome://extensions/`)
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked extension"
5. Select the unzipped plugin folder

## Usage

1. Open the Tencent Meeting recording playback page
2. Click the plugin icon in the toolbar
3. Wait for the plugin to detect the video URL
4. Enter the desired video save path (including filename, e.g., `D:/meeting_video.mp4`)
5. Click "Generate Download Command"
6. Copy the generated curl command
7. Execute the command in Git Bash to start downloading

## Development

### Requirements

- Node.js >= 14
- Git Bash (for executing download commands)

### Project Setup

```bash
# Clone project
git clone https://github.com/your-username/tencent-meeting-video-downloader.git

# Install dependencies
npm install

# Development build
npm run watch

# Production build
npm run build
```

### Project Structure

```
├── src/
│   ├── assets/    # Icons and static resources
│   ├── background/# Background scripts
│   ├── content/   # Content scripts
│   ├── popup/     # Popup window related files
│   └── utils/     # Utility functions
├── dist/          # Build output directory
├── manifest.json  # Extension configuration file
├── webpack.config.js # Webpack configuration
└── package.json   # Project configuration file
```

## Notes

- This plugin is for learning and personal use only
- Please comply with relevant terms of service and regulations
- Downloaded videos are for personal viewing only, do not distribute

## Tech Stack

- JavaScript (ES6+)
- Chrome Extension API
- Webpack
- CSS3

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

For issues or suggestions, please submit an Issue.