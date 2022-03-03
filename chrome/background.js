chrome.action.onClicked.addListener(tab => {
   // Inject scripts and styles
   chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['dtms.js']
   });
   chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['dtms.css']
   });
   
   // Change badge for the current tab
   chrome.action.setBadgeBackgroundColor({
      tabId: tab.id,
      color: '#00A300'
   });
   chrome.action.setBadgeText({
      tabId: tab.id,
      text: '✓'
   });
});