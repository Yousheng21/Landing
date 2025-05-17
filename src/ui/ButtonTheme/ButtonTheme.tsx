import React from "react";

import "./index.css";
import ThemeStore from "../../theme/Theme.store";

export const ButtonTheme = () => {
  const themeStore = ThemeStore.currentTheme;

  return (
    <div className="btn-container">
      <label className="switch btn-color-mode-switch">
        <input
          type="checkbox"
          onClick={() => ThemeStore.changeCurrentTheme(themeStore === "dark" ? "light" : "dark")}
          name="color_mode"
          id="color_mode"
          value="1"
          checked={themeStore === "dark"}
        />
        <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
      </label>
    </div>
  );
};
