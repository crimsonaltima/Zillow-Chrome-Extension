import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const App: React.FC<{}> = () => {
  const handleClick = () => {
    // Send a message to the content script when the button is clicked
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "extractProperty" });
    });
  };
  return (
    <div>
      <img src="icon.png" />
      <button onClick={handleClick}>Extract Property Info</button>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
