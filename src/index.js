import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import navOptionSlice from "./store/navOptionSlice";
import userSlice from "./store/userSlice";

const store = configureStore({
  reducer: {
    navOptionSlice,
    userSlice
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
