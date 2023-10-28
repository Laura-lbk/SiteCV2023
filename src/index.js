import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MenuBurger from "./Components/Menu/MenuBurger";
import Content from "./Components/Content/Content";
import { BrowserRouter } from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import menu_en from "./translations/en/menu.json";
import menu_fr from "./translations/fr/menu.json";

import reportWebVitals from "./reportWebVitals";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
    lng: 'fr',                              // language to use
    resources: {
        en: {
            menu: menu_en,            // 'common' is our custom namespace
        },
        fr: {
            menu: menu_fr,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <div id="outer-container">
        <MenuBurger></MenuBurger>
        <main id="page-wrap">
          <Content></Content>
        </main>
      </div>
    </I18nextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
