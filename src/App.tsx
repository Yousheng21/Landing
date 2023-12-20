import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";
import { ThemeProvider } from "styled-components";

import { MainRouter } from "./routes/MainRouter";
import ThemeStore from "./theme/Theme.store";

const App = observer(() => {
  useEffect(() => {
    ThemeStore.init();
  }, []);

  return (
    <ThemeProvider theme={ThemeStore.colors}>
      <MainRouter />
    </ThemeProvider>
  );
});

export default App;
