window.bears = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.bears[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})

document.addEventListener('paste', function (event) {
  var clipText = event.clipboardData.getData('Text');
  // 
  let sjson = JSON.parse(clipText);
  let videoId = sjson.ad_docid;
  alert("videoId: " + String(videoId));
  if (videoId) {
    let url = "https://www.youtube.com/watch?v=" + videoId;
    window.open(url, "_blank");
  }
});
