document.addEventListener('DOMContentLoaded', function () {

  // const bg = chrome.extension.getBackgroundPage()
  // alert(JSON.stringify(bg.bears))
  // Object.keys(bg.bears).forEach(function (url) {
  //   const div = document.createElement('div')
  //   div.textContent = `${url}: ${bg.bears[url]}`
  //   document.body.appendChild(div)
  // })


  function onpaste (event) {
    let pastedText = (event.clipboardData || window.clipboardData).getData('text');

    let sjson = JSON.parse(pastedText);
    let videoId = sjson.ad_docid;
    // alert("videoId: " + String(videoId));
    let resultMessage = "";
    if (videoId) {
      let url = "https://www.youtube.com/watch?v=" + videoId;
      window.open(url, "_blank");
      resultMessage = "The URL has been ... Processed"
    } else {
      resultMessage = "Could not find Ad data in the pasted data"
      alert(resultMessage)
    }
    // alert(resultMessage)

    // event.target.value = "Processed!"
  }
  document.querySelector('#text').addEventListener('paste', onpaste, false)

  function cleanForm(event) { document.querySelector('#text').value = ''; }

  document.querySelector('#text').addEventListener('focus', cleanForm, false)
  
  document.querySelector('#clearBtn').addEventListener('click', cleanForm, false)
  // document.querySelector('#clearBtn').addEventListener('click', function(e){
  //   document.querySelector('#text').value = '';
  // }, false)


  // document.querySelector('button').addEventListener('click', onclick, false)
  
  // function onclick () {
  //   chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
  //   })
  // }
  //
  // function setCount (res) {
  //   const div = document.createElement('div')
  //   div.textContent = `${res.count} bears`
  //   document.body.appendChild(div)
  // }
}, false)
