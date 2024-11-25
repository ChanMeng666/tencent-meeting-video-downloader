// 注入网络请求监听器
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

// 监听XHR请求
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach(entry => {
    if (entry.name.includes('myqcloud.com') && 
        entry.name.includes('.mp4') && 
        entry.name.includes('recording')) {
      chrome.runtime.sendMessage({
        action: 'foundVideoUrl',
        url: entry.name
      });
    }
  });
});

observer.observe({ entryTypes: ['resource'] });