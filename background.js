chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('chess.com/game/live') || tab.url.includes('chess.com/game/daily')) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['script.js']
    });
  }});