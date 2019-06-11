var getSelectedTab = tab => {
  var tabId = tab.id
  var sendMessage = messageObj => chrome.tabs.sendMessage(tabId, messageObj)
  document.getElementById('get').addEventListener('click', () => sendMessage({ action: 'GET' }))
}
chrome.tabs.getSelected(null, getSelectedTab)
