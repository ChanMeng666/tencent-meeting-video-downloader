export const extractVideoUrl = (requestDetails) => {
  const url = requestDetails.url;
  if (url.includes('myqcloud.com') && 
      url.includes('.mp4') && 
      url.includes('recording')) {
    return url;
  }
  return null;
};

export const generateCurlCommand = (url, savePath) => {
  // 处理Windows路径格式
  const unixPath = savePath.replace(/\\/g, '/').replace(/^([A-Za-z]):/, (_, drive) => {
    return `/${drive.toLowerCase()}`;
  });

  // 构造curl命令，严格按照教程中的格式
  const command = `curl '${url}' \\
  -H 'authority: yunluzhi-az-1258344699.file.myqcloud.com' \\
  -H 'sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"' \\
  -H 'sec-ch-ua-mobile: ?0' \\
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' \\
  -H 'sec-ch-ua-platform: "Windows"' \\
  -H 'accept: */*' \\
  -H 'sec-fetch-site: cross-site' \\
  -H 'sec-fetch-mode: no-cors' \\
  -H 'sec-fetch-dest: video' \\
  -H 'referer: https://meeting.tencent.com/' \\
  -H 'accept-language: zh-CN,zh;q=0.9' \\
  --compressed \\
  --output '${unixPath}'`;

  // 移除可能存在的不可见字符
  return command.replace(/[\u200B-\u200D\uFEFF]/g, '');
}; 