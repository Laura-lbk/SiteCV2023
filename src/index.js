import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MenuBurger from "./Menu/MenuBurger.js";
import Content from "./Content/Content";
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div id="outer-container">
      <MenuBurger></MenuBurger>
      <main id="page-wrap">
        <Content></Content>
      </main>
    </div>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
