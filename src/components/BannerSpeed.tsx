import React from "react";

import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/logo.svg";

export const BannerSpeed = () => (
  <Container id="security">
    <Logo />

    <div className="flex flex-col gap-5">
      <H1>
        Высокая скорость <br /> передвижения
      </H1>
      <Text>
        Двигатель мощностью до 600 Вт позволяет <br /> развивать скорость до 25 км/ч
      </Text>
    </div>
  </Container>
);

const Container = styled.section`
  background-image: url("assets/banner-speed.png");
  background-position: 20% 10%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 200px;
  height: 900px;
  margin-left: -140px;
  margin-right: -140px;
  padding-left: 140px;
  padding-top: 120px;

  @media screen and (max-width: 1024px) {
    height: auto;
    padding-bottom: 70px;
  }
  @media screen and (max-width: 425px) {
    margin-left: -10px;
    margin-right: -10px;
    padding-left: 70px;
  }
`;

const H1 = styled.h1`
  font-size: 45px;
  color: white;
`;

const Text = styled.span`
  font-size: 14px;
  color: white;
`;
