var skipEnabled = 1

function amazonSkipIntro()
{
  console.log('Skip intro activated')
  const url = document.location.href

  if (skipEnabled) {
    // skip intro
    // <div class="f1oordr3 f989gul f1ap0gh8 fq4bwzw f1ns8ocy fx1l1v6 f19qnh9o">Skip Intro</div>
    if (skip = document.querySelector('div.f1oordr3')) {
      skip.click()
    }
    // <div class="fu4rd6c f1cw2swo">Skip<div class="f11v6oas ft2b9o f10qupmc f1lwigi4"><img class="fuorrko" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4LjQ4NCIgaGVpZ2h0PSIxNC4xNDEiIHZpZXdCb3g9IjAgMCA4LjQ4NCAxNC4xNDEiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik03LjA3IDUuNjU2TDEuNDE0IDAgMCAxLjQxNCA1LjY1NiA3LjA3IDAgMTIuNzI3bDEuNDE0IDEuNDE0TDcuMDcgOC40ODQgOC40ODQgNy4wN3oiLz48L3N2Zz4=" alt=""></div></div>
    if (skip = document.querySelector('div.fu4rd6c')) {
      skip.click()
    }

  //   if (continue_button = document.querySelector('a.nf-icon-button.nf-flat-button.nf-flat-button-uppercase')) {
  //     continue_button.click
  //   }
  }
}

createObserverWithRetry('div.webPlayerUIContainer', amazonSkipIntro)


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    skipEnabled = request.skipEnabled
    console.log('Skip is ' + skipEnabled);
    if (skipEnabled) {
      console.log("Running skip once")
      skipIntro
    }
  });