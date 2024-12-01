let videoUrls = new Set();

// 监听网络请求
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url;
    if (url.includes('myqcloud.com') && 
        url.includes('.mp4') && 
        url.includes('recording')) {
      videoUrls.add(url);
      chrome.storage.local.set({ videoUrls: Array.from(videoUrls) });
    }
  },
  { 
    urls: ["*://*.myqcloud.com/*recording*.mp4*"],
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

// 监听消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getVideoUrls') {
    chrome.storage.local.get(['videoUrls'], (result) => {
      sendResponse({ videoUrls: result.videoUrls || [] });
    });
    return true;
  }
});