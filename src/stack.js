
function stackExchangeCallback() {
  sidebar = document.querySelector('#sidebar')
  if ( sidebar ) {
    sidebar.parentNode.removeChild(sidebar)
  }
  document.querySelector('#mainbar').style.width = "100%"
}

createObserverWithRetry('#mainbar', stackExchangeCallback)
