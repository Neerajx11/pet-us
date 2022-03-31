import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import * as ReactDOMClient from "react-dom/client";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
