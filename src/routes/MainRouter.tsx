import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { WithNavbar } from "./components/WithNavbar";

export const MainRouter = () => (
  <BrowserRouter>
    <WithNavbar>
      <>
        <Route path="/" element={null} />
        <Route path="/feedback" element={<div>fsdf</div>} />
        <Route path="/payment" element={<div>fsdf</div>} />
      </>
    </WithNavbar>
  </BrowserRouter>
);
