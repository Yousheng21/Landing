import React from "react";

import { Appearance } from "./Appearance";
import { Banner } from "./Banner";
import { BannerSpeed } from "./BannerSpeed";
import { Tabs } from "./Tabs";

export const MainPage = () => (
  <div className="flex gap-32 flex-col">
    <Banner />
    <Tabs />
    <BannerSpeed />
    <Appearance />
  </div>
);
