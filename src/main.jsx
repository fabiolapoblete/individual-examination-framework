import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styling/index.css";

// import {store} from "./app/store.js"
// import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </Provider>
);
