chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(
    tab.id,
    {
      code: `var originalUrl = "${tab.url}";`,
    },
    () => {
      chrome.tabs.executeScript(tab.id, { file: "content.js" });
    }
  );
});
