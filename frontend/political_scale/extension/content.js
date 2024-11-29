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

const appDiv = document.createElement("div");
appDiv.id = "react-extension-container"; // This is where your app will be injected
document.body.appendChild(appDiv);

document.addEventListener("DOMContentLoaded", function () {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("bundle.js"); // Path to the bundled React app

  script.onload = function () {
    console.log("bundle.js loaded successfully!");
    // React in bundle.js will handle mounting to the div itself
  };

  document.body.appendChild(script); // Inject the script into the page
});
