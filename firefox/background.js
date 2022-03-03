browser.browserAction.onClicked.addListener(() => {
   browser.tabs.executeScript(null, {file: "dtms.js"});
   browser.tabs.insertCSS(null, {file: "dtms.css"});

   browser.browserAction.setBadgeTextColor({color: '#FFFFFF'});
   browser.browserAction.setBadgeBackgroundColor({color: '#00A300'});
   browser.browserAction.setBadgeText({text: '✓'});
});