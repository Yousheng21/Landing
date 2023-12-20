import { makeAutoObservable } from "mobx";

import { IThemeColors } from "../models/ThemeColors";

import { DARK_THEME, LIGHT_THEME } from "./Theme.colors";

type TTheme = "light" | "dark";

class ThemeStore {
  currentTheme: TTheme = "dark";

  constructor() {
    makeAutoObservable(this);
  }

  init = () => {
    const colorsFromStorage = localStorage.getItem("colors") as TTheme;
    if (colorsFromStorage) {
      this.currentTheme = colorsFromStorage;
    }
  };

  get colors(): IThemeColors {
    return this.currentTheme === "dark" ? DARK_THEME : LIGHT_THEME;
  }

  changeCurrentTheme = (theme: TTheme) => {
    this.currentTheme = theme;
    localStorage.setItem("colors", theme);
  };
}

export default new ThemeStore();
