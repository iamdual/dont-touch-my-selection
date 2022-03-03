browser.browserAction.onClicked.addListener(tab => {
   // Inject scripts and styles
   browser.tabs.executeScript(null, {
      file: 'dtms.js'
   });
   browser.tabs.insertCSS(null, {
      file: 'dtms.css'
   });

   // Change badge for the current tab
   browser.browserAction.setBadgeTextColor({
      tabId: tab.id,
      color: '#FFFFFF'
   });
   browser.browserAction.setBadgeBackgroundColor({
      tabId: tab.id,
      color: '#00A300'
   });
   browser.browserAction.setBadgeText({
      tabId: tab.id,
      text: '✓'
   });
});