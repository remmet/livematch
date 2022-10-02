import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Main } from "./App";
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
