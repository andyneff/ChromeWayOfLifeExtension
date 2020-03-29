var skipEnabled = 1

function skipIntro()
{
  console.log('Skip intro activated')
  const url = document.location.href

  if (skipEnabled) {
    if (url.match('amazon.com')) {
      if (skip = document.querySelector('div.adSkipButton')) {
        console.log("Skipping ads!")
        skip.click()
      }
      if (skip = document.querySelector('div.skipElement')) {
        console.log("Skipping intro")
        skip.click()
      }
    } else if (url.match('netflix.com')) {
      if (skip = document.querySelector('div.skip-credits')) {
        skip.querySelector('a').click()
      }
      if (continue_button = document.querySelector('a.nf-icon-button.nf-flat-button.nf-flat-button-uppercase')) { 
        continue_button.click
      }
    }
  }
}

function createObserverWithRetry() {
  const url = document.location.href
  if (url.match('amazon.com')) {
    controls = document.querySelector("div.controlsOverlay")
  } else if (url.match('netflix.com')) {
    controls = document.querySelector('.PlayerControlsNeo__layout')
  }

  if (!controls) {
    console.log('Waiting for overlay...')
    setTimeout(createObserverWithRetry, 1000);
    return;
  }

  console.log('Overlay found')
  const observer = new MutationObserver(skipIntro);
  observer.observe(controls, { childList: true, subtree: true });

  if (url.match('amazon.com')) {
    controls2 = document.querySelector("div.infoBar").querySelector("div.right")
    if (!controls2) {
      console.log("Failed to find infobar right")
      return
    }
    console.log("Found infobar right")
    const observer2 = new MutationObserver(skipIntro);
    observer2.observe(controls2, {childList: true, subtree: true});
  }
}
console.log('wtf');
createObserverWithRetry();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    skipEnabled = request.skipEnabled
    console.log('Skip is ' + skipEnabled);
    if (skipEnabled) {
      console.log("Running skip once")
      skipIntro
    }
  });