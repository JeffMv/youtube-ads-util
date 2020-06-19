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

    let url = getAdVideoUrl(pastedText)
    let resultMessage = "";
    if (url) {
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

  function getAdVideoUrl(entry) {
    let url = undefined;
    let infos = JSON.parse(entry)
    if (infos) {
      let videoId = infos.ad_docid;
      url = "https://www.youtube.com/watch?v=" + videoId;
    } else if (typeof entry === "string") {
      const reVidId = /^([a-zA-Z0-9-]{11})$/
      if (entry.trim().indexOf("http") === 0) {
        url = entry
      } else if (entry.match(reVidId)) {
        let res = entry.match(reVidId)
        let videoId = ""
        url = "https://www.youtube.com/watch?v=" + videoId;
      }
    }
    return url
  }

  function openVideoWithData(str) {
    let url = getAdVideoUrl(str)
    if (url) {
      window.open(url, "_blank");
      return true
    } else {
      return false
    }
  }

}, false)
