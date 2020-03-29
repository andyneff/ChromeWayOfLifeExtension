var skipEnabled = 1

function netflixSkipIntro(mutationsList, observer)
{
  // console.log('Skip intro activated.' + mutationsList + ":" + observer)
  const url = document.location.href

  if (skipEnabled) {
    // Skip Intro
    if (skip = document.querySelector('div.skip-credits')) {
      // console.log('Skipping intro')
      skip.querySelector('a').click()
    }
    // Skip Recap
    if (continue_button = document.querySelector('a.nf-icon-button.nf-flat-button.nf-flat-button-uppercase')) {
      // console.log('Skipping Recap')
      continue_button.click
    }
    // Auto click Next episode
    // <button class="medium hasLabel ltr-6gmfhw" data-uia="next-episode-seamless-button" type="button">
    if (next_episode = document.querySelector('button.ltr-6gmfhw')) {
      // For some unknown reason, I can't click the actual "Next Episode"
      // button, however the menu's "|>|" button can have .click() called
      // on it.
      // console.log('Going to next episode')
      document.querySelector('button.button-nfplayerNextEpisode').click()
    }
    // Before the button shows up, a mouse move turns it from "draining" to
    // non-draining. This catches the draining version
    // <button class="btn-draining medium hasLabel ltr-ztzg4b" type="button">
    if (next_episode = document.querySelector('button.draining')) {
      // console.log('Going to next episode during draining')
      document.querySelector('button.button-nfplayerNextEpisode').click()
    }
    // The above doesn't really work... not sure why, somehow the observer
    // misses button.draining. I don't know how that's possible, but it does
    // However, what I observed is that that when nfp goes into next episode
    // mode, it turns the entire screen into a new hitzone, and that hitzone
    // is how it reads you clicking the "Next Episode" button, instead of like
    // a normal button... WHY? Someone is probably just experimenting. So this
    // new hitzone div class is just for Next Episode
    if (next_episode = document.querySelector('div.main-hitzone-element-container')) {
      // console.log('Going to next episode cause of hitzone')
      document.querySelector('button.button-nfplayerNextEpisode').click()
    }
  }
}

// createObserverWithRetry('div.PlayerControlsNeo__layout', netflixSkipIntro)
createObserverWithRetry('div.netflix-sans-font-loaded', netflixSkipIntro)

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    skipEnabled = request.skipEnabled
    // console.log('Skip is ' + skipEnabled);
    if (skipEnabled) {
      // console.log("Running skip once")
      skipIntro
    }
  });