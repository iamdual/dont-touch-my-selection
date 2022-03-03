chrome.action.onClicked.addListener(tab => {
   chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['dtms.js']
   });
   chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['dtms.css']
   });
   
   chrome.action.setBadgeBackgroundColor({color: '#00A300'});
   chrome.action.setBadgeText({text: '✓'});
});