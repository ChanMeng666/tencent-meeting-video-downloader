import './popup.css';
import { generateCurlCommand } from '../utils/download';

document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const videoList = document.getElementById('videoList');
  const generateBtn = document.getElementById('generateBtn');
  const savePath = document.getElementById('savePath');
  const commandBox = document.getElementById('commandBox');
  const curlCommand = document.getElementById('curlCommand');
  const copyBtn = document.getElementById('copyBtn');

  function updateStatus(message, type = '') {
    status.textContent = message;
    status.className = `status ${type}`;
  }

  // 获取检测到的视频URL
  chrome.runtime.sendMessage({ action: 'getVideoUrls' }, (response) => {
    const urls = response.videoUrls || [];
    
    if (urls.length > 0) {
      updateStatus('检测到以下视频：', 'success');
      generateBtn.disabled = false;
      
      urls.forEach((url, index) => {
        const div = document.createElement('div');
        div.className = 'video-item';
        div.textContent = `视频 ${index + 1}`;
        div.title = url;
        videoList.appendChild(div);
      });

      generateBtn.addEventListener('click', () => {
        const path = savePath.value.trim();
        if (!path) {
          updateStatus('请输入保存路径！', 'error');
          return;
        }

        try {
          const url = urls[urls.length - 1];
          const command = generateCurlCommand(url, path);
          curlCommand.textContent = command;
          commandBox.style.display = 'block';
          updateStatus('命令已生成，请复制到Git Bash中运行', 'success');
        } catch (error) {
          updateStatus(`生成命令失败：${error.message}`, 'error');
        }
      });

      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(curlCommand.textContent)
          .then(() => {
            copyBtn.textContent = '已复制';
            setTimeout(() => {
              copyBtn.textContent = '复制命令';
            }, 2000);
          })
          .catch(err => {
            updateStatus('复制失败，请手动复制', 'error');
          });
      });
    } else {
      updateStatus('未检测到视频，请打开腾讯会议录屏页面并播放视频');
    }
  });
});