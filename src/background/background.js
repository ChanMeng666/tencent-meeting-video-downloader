import { extractVideoUrl } from '../utils/download';

let videoUrls = new Set();

// 监听网络请求
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const videoUrl = extractVideoUrl(details);
    if (videoUrl) {
      videoUrls.add(videoUrl);
      chrome.storage.local.set({ videoUrls: Array.from(videoUrls) });
    }
  },
  { 
    urls: [
      "*://*.myqcloud.com/*recording*.mp4*"
    ],
    types: ["media", "xmlhttprequest"]
  }
);

// 移除range请求头
chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    let headers = details.requestHeaders.filter(header => 
      !['range', 'if-range'].includes(header.name.toLowerCase())
    );
    return { requestHeaders: headers };
  },
  {
    urls: ["*://*.myqcloud.com/*recording*.mp4*"]
  },
  ["blocking", "requestHeaders"]
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getVideoUrls') {
    chrome.storage.local.get(['videoUrls'], (result) => {
      sendResponse({ videoUrls: result.videoUrls || [] });
    });
    return true;
  }
  
  if (request.action === 'executeDownload') {
    // 使用chrome.downloads API执行下载
    chrome.downloads.download({
      url: request.url,
      filename: request.filename,
      saveAs: true, // 显示"另存为"对话框
      headers: [
        { name: 'Accept', value: '*/*' },
        { name: 'Referer', value: 'https://meeting.tencent.com/' },
        { name: 'Sec-Fetch-Dest', value: 'video' }
      ]
    }, (downloadId) => {
      if (chrome.runtime.lastError) {
        console.error('下载错误：', chrome.runtime.lastError);
        return;
      }

      // 监听下载状态
      chrome.downloads.onChanged.addListener(function downloadListener(delta) {
        if (delta.id === downloadId) {
          if (delta.state && delta.state.current === 'complete') {
            console.log('下载完成');
            chrome.downloads.onChanged.removeListener(downloadListener);
          } else if (delta.error) {
            console.error('下载失败：', delta.error.current);
            chrome.downloads.onChanged.removeListener(downloadListener);
          }
        }
      });
    });
    return true;
  }
});

// 清理数据
chrome.tabs.onRemoved.addListener(() => {
  videoUrls.clear();
  chrome.storage.local.remove('videoUrls');
}); 