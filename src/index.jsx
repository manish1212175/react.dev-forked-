import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import MyNewApp from "./MyNewApp";
import AppWork from "./AppWork";
import AppList from "./AppList";
import AppClick from "./AppClick";
import AppScreenUpdate from "./AppScreenUpdate";
import { useState } from "react";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <MyNewApp />
    <AppWork />
    <AppList />
    <AppClick />
    <AppScreenUpdate />
  </StrictMode>,
);
