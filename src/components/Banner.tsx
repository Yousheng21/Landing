import React from "react";

import styled from "styled-components";

import { ButtonTheme } from "../ui/ButtonTheme/ButtonTheme";

export const Banner = () => (
  <Container>
    <H1>
      Стильный электросамокат <br />с мощным аккумулятором
    </H1>
    <H5>
      Улучшенная производительность <br />
      для дальних путешествий.
      <br /> Работает так же просто,
      <br /> как и выглядит.
    </H5>
    <ButtonTheme />
  </Container>
);

const Container = styled.section`
  background-image: url("assets/banner.png");
  background-position: 110% 10%;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1440px) {
    background-position: 100% 10%;
    background-size: 420px;
  }
  @media screen and (max-width: 767px) {
    background: none;
  }
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 80px;

  @media screen and (max-width: 1440px) {
    font-size: 50px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 40px;
  }
`;

const H5 = styled.h5`
  color: ${(props) => props.theme.orange};
  font-size: 30px;
  width: 50%;
`;
