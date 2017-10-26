// background.js

console.log("hahahah");

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  }
);



//refresh the page
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("refresh_button-id");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            window.location.reload();
        });
    }
});
