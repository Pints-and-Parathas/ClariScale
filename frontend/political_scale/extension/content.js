console.log("Content script loaded");

const currentUrl = window.location.href;

chrome.runtime.sendMessage(
  { type: "SEND_URL", url: currentUrl },
  (response) => {
    if (response.data) {
      console.log("Received data from background script:", response.data);

      // Store the data in chrome.storage.local (for later use in React)
      chrome.storage.local.set({ articleData: response.data }, () => {
        console.log("Data stored in chrome.storage:", response.data);
      });
    } else if (response.error) {
      console.error("Error received:", response.error);
    }
  }
);
