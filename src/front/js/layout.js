import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { MyNavbar } from "./component/navbarTop";
import NavbarBottom from "./component/NavbarBottom";
import Banner from "./component/Banner";
import Card from "./component/Card";
import { Footer } from "./component/Footer";
import { Ecategory } from "./pages/Ecategory";
import { Scategory } from "./pages/Scategory";
import { Hcategory } from "./pages/Hcategory";
import ViewItem from "./pages/ViewItem";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <MyNavbar />
          <NavbarBottom />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Ecategory />} path="Ecategory" />
            <Route element={<Scategory />} path="Scategory" />
            <Route element={<Hcategory />} path="Hcategory" />
            <Route element={<ViewItem />} path="ViewItem/:type:id" />
            {/* <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} /> */}
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
