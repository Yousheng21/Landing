import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { MainPage } from "../components/MainPage";

import { WithNavbar } from "./components/WithNavbar";

export const MainRouter = () => (
  <BrowserRouter>
    <WithNavbar>
      <Route path="/" element={<MainPage />} />
    </WithNavbar>
  </BrowserRouter>
);
