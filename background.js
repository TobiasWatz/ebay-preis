chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchEbay",
    title: "Auf eBay suchen",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchEbay" && info.selectionText) {
    const query = info.selectionText;
    const ebayUrl = `https://www.ebay.de/sch/i.html?_nkw=${encodeURIComponent(query)}&_ipg=240&LH_Sold=1`;
    chrome.tabs.create({ url: ebayUrl });
  }
});
