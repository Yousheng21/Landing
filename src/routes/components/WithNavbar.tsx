import React, { FC } from "react";

import { AnimatePresence } from "framer-motion";
import { Routes } from "react-router-dom";
import styled from "styled-components";

import { Spacer } from "../../styles/common";
import { NavBar, Footer } from "../../ui";

interface IWithNavbar {
  children: JSX.Element;
}

export const WithNavbar: FC<IWithNavbar> = (props) => (
  <Container>
    <GridArea area="header" style={{ marginBottom: 50 }}>
      <NavBar />
    </GridArea>
    <GridArea area="main-content">
      <AnimatePresence mode="wait">
        <Routes>{props.children}</Routes>
      </AnimatePresence>
    </GridArea>
    <GridArea area="footer" style={{ marginTop: 50 }}>
      <Footer />
    </GridArea>
  </Container>
);

const Container = styled.section`
  display: grid;
  grid-template-areas:
    "header"
    "main-content"
    "footer";
  grid-template-rows: 15vh auto auto;
  background-color: ${(props) => props.theme.background};

  padding-left: 140px;
  padding-right: 140px;

  @media screen and (max-width: 425px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 1024px) {
    width: 235vw;
  }
`;

const GridArea = styled.div<{ area: string; width?: string }>`
  grid-area: ${(props) => props.area};
`;
