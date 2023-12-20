import React, { FC } from "react";

import { AnimatePresence } from "framer-motion";
import { Routes } from "react-router-dom";
import styled from "styled-components";

import { NavBar, Footer } from "../../components";

interface IWithNavbar {
  children: JSX.Element;
}

export const WithNavbar: FC<IWithNavbar> = (props) => (
  <div>
    <Container>
      <GridArea area="header">
        <NavBar />
      </GridArea>
      <GridArea area="main-content">
        <AnimatePresence mode="wait">
          <Routes>{props.children}</Routes>
        </AnimatePresence>
      </GridArea>
      <GridArea area="footer">
        <Footer />
      </GridArea>
    </Container>
  </div>
);

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main-content"
    "footer";
  grid-template-rows: 10vh auto 10vh;
  background-color: ${(props) => props.theme.background};
`;

const GridArea = styled.div<{ area: string; width?: string }>`
  grid-area: ${(props) => props.area};
`;
