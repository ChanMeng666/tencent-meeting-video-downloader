# Tencent Meeting Recording Downloader

[中文文档](./README.zh-CN.md)

A Chrome browser extension that helps you easily download Tencent Meeting recording videos.

## Features

- 🎯 Automatically detect video URLs on Tencent Meeting playback pages
- 📂 Support custom video save paths
- 🚀 Generate reliable curl download commands
- 💻 Clean and intuitive user interface
- 🔒 Secure and reliable, no user data collection

## Installation Guide

### Method 1: Direct Installation (Recommended for regular users)

1. Download the latest release
   - Go to the [Releases](https://github.com/ChanMeng666/tencent-meeting-video-downloader/releases) page
   - Download the latest `tencent-meeting-video-downloader.zip` file

2. Prepare Chrome Browser
   - Open Chrome browser
   - Type `chrome://extensions/` in the address bar and press Enter
   - Enable "Developer mode" using the toggle switch in the top-right corner

3. Install the Extension
   - Unzip the downloaded `tencent-meeting-video-downloader.zip` file
   - Click "Load unpacked" button in Chrome extensions page
   - Select the unzipped folder
   - You should now see the extension icon in your Chrome toolbar

### Method 2: Installation from Source (For developers)

1. Prerequisites
   - Install [Node.js](https://nodejs.org/) (version 14 or higher)
   - Install [Git](https://git-scm.com/downloads)
   - Install [Git Bash](https://git-scm.com/downloads) (comes with Git for Windows)

2. Clone and Build
   ```bash
   # Clone the repository
   git clone https://github.com/ChanMeng666/tencent-meeting-video-downloader.git
   
   # Enter the project directory
   cd tencent-meeting-video-downloader
   
   # Install dependencies
   npm install
   
   # Build the extension
   npm run build
   ```

3. Load the Extension
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` folder from the project directory

## Usage Guide

1. Prepare the Meeting Recording
   - Open the Tencent Meeting recording playback page in Chrome
   - Start playing the video you want to download

2. Use the Extension
   - Click the extension icon in the Chrome toolbar
   - Wait for the "Video detected" message
   - Enter your desired save path (e.g., `D:/Videos/meeting_recording.mp4`)
   - Click "Generate Download Command"

3. Download the Video
   - Click the "Copy Command" button
   - Open Git Bash
   - Right-click and select "Paste" to paste the command
   - Press Enter to start downloading
   - Wait for the download to complete

4. Verify the Download
   - Check the specified save location
   - Try playing the downloaded video to ensure it works correctly

## Troubleshooting

Common issues and solutions:

1. Extension not detecting video
   - Make sure the video is playing
   - Refresh the page and try again

2. Download command not working
   - Verify Git Bash is installed correctly
   - Check if the save path is valid
   - Ensure you have write permissions for the save location

3. Video playback issues
   - Try using VLC media player
   - Check if the download completed successfully

## Development

### Requirements

- Node.js >= 14
- Git Bash (for executing download commands)

### Project Setup

```bash
# Clone project
git clone https://github.com/ChanMeng666/tencent-meeting-video-downloader.git

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

## Author

**Chan Meng**

- LinkedIn: [chanmeng666](https://www.linkedin.com/in/chanmeng666/)
- GitHub: [ChanMeng666](https://github.com/ChanMeng666)