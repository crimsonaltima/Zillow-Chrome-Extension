// TODO: content script
// TODO: content script

function extractPropertyInformation() {
  // Get the HTML elements that contain the property information
  const priceElement = document.querySelector('[data-testid="price"]');
  const addressElement = document.querySelector(
    'h1[class="Text-c11n-8-84-0__sc-aiai24-0 fsXIkY"]'
  );
  const bedsBathsElement = document.querySelector(
    '[data-testid="bed-bath-beyond"]'
  );
  const sqftElement = bedsBathsElement.querySelector(
    '[data-testid="bed-bath-item"]:last-child'
  );
  const statusElement = document.querySelector(
    'span[class="Text-c11n-8-84-0__sc-aiai24-0 dpf__sc-1yftt2a-1 fsXIkY iOiapS"]'
  );

  // Extract the text content from the HTML elements
  const price = priceElement ? priceElement.textContent.trim() : null;
  const address = addressElement ? addressElement.textContent.trim() : null;
  const beds = bedsBathsElement
    ? bedsBathsElement.querySelector("strong:first-child").textContent.trim()
    : null;
  /*
const baths = bedsBathsElement
  ? bedsBathsElement.querySelector("strong:nth-child(2)").textContent.trim()
  : null;
  */
  const sqft = sqftElement ? sqftElement.textContent.trim() : null;
  const status1 = statusElement ? statusElement.textContent.trim() : null;

  // Print the extracted property information to the console
  console.log(`Price: ${price}`);
  console.log(`Address: ${address}`);
  console.log(`Beds: ${beds}`);
  //console.log(`Baths: ${baths}`);
  console.log(`Sqft: ${sqft}`);
  console.log(`Status: ${status1}`);
}

// Add a listener to receive messages from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extractProperty") {
    // Do something when a message with action 'popupButtonClick' is received
    console.log("Button clicked in popup!");
    extractPropertyInformation();
    // Send a message to the popup script to update its state
    // chrome.runtime.sendMessage({ action: 'updatePopup', data: 'Button clicked!' });
  }
});
