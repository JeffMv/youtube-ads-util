//alert('Grrr.')
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   const re = new RegExp('bear', 'gi')
//   const matches = document.documentElement.innerHTML.match(re)
//   sendResponse({count: matches.length})
// })

const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []

chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})



document.addEventListener('copy', function (event) {
  // alert(JSON.stringify(event));
  var clipText = event.clipboardData.getData('Text');
  // alert(clipText);
  // setTimeout( () => navigator.clipboard.read().then( (v)=>console.log(v) ), 2000)
  // navigator.clipboard.read().then( (v)=>console.log(v) )

  // 
  let sjson = JSON.parse(clipText);
  let videoId = sjson.ad_docid;
  alert("videoId: " + String(videoId));
  if (videoId) {
    let url = "https://www.youtube.com/watch?v=" + videoId;
    window.open(url, "_blank");
  }
});
