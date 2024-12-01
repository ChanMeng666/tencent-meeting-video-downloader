// 注入检测脚本
const script = document.createElement('script');
script.textContent = `
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const response = await originalFetch(...args);
    const url = response.url;
    if (url.includes('myqcloud.com') && 
        url.includes('.mp4') && 
        url.includes('recording')) {
      window.postMessage({
        type: 'VIDEO_URL_DETECTED',
        url: url
      }, '*');
    }
    return response;
  };
`;
document.documentElement.appendChild(script);

// 监听视频URL
window.addEventListener('message', (event) => {
  if (event.data.type === 'VIDEO_URL_DETECTED') {
    chrome.runtime.sendMessage({
      action: 'foundVideoUrl',
      url: event.data.url
    });
  }
});