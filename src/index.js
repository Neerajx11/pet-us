import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import { createRoot } from "react-dom/client";
import React from "react";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
