var skipEnabled=1

function toggleEnableSkip() {
  if ( skipEnabled ){
    skipEnabled = 0
    chrome.contextMenus.update(contextMenuId, {"title": "Enable Auto Skip"})
  } else {
    skipEnabled = 1
    chrome.contextMenus.update(contextMenuId, {"title": "Disable Auto Skip"})
  }
  chrome.tabs.query({active: true, currentWindow: true},
                    function(tabs) {
                      chrome.tabs.sendMessage(tabs[0].id,
                                              {skipEnabled: skipEnabled});
                    });
}

var contextMenuId = chrome.contextMenus.create({
  "id": "controlSkip",
  "title": "Disable Auto Skip",
  "type": "normal",
  "contexts": ["browser_action"],
  "onclick": toggleEnableSkip
});

console.log('My Stuff BG loaded')