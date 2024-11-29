chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SEND_URL") {
    console.log("Sending URL to API");

    // Make the fetch request to the API
    fetch("http://127.0.0.1:8000/submit-article/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: message.url }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Response from API:", data);

        // Send the parsed JSON response back to the content script
        sendResponse({ data: data });
      })
      .catch((error) => {
        console.error("Error sending URL:", error);

        // Handle error case
        sendResponse({ error: "Error sending URL to API" });
      });

    // Indicate that the response will be sent asynchronously
    return true; // Keep the message channel open for asynchronous response
  }
});
