import React from "react";

import { Appearance, Banner, BannerSpeed, Tabs } from "./index";

export const MainPage = () => (
  <div className="flex gap-32 flex-col">
    <Banner />
    <Tabs />
    <BannerSpeed />
    <Appearance />
  </div>
);
