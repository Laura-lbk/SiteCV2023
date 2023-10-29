import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
import transverse_en from "./translations/en/transverse.json";
import transverse_fr from "./translations/fr/transverse.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
    lng: 'fr',                              // language to use
    resources: {
        en: {
            menu: menu_en, 
            transverse: transverse_en           // 'common' is our custom namespace
        },
        fr: {
            menu: menu_fr,
            transverse: transverse_fr  
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

