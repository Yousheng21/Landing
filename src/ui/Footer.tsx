import React from "react";

import styled from "styled-components";

export const Footer = () => (
  <Container>
    <Block>
      <Text>© 2010 - 2021 Xiaomi.</Text>
      <Text>Все права защищены.</Text>
    </Block>
    <Block className="text-right">
      <Text>8 800 775 66 15</Text>
      <Text>Часы работы с 9:00 до 20:00 МСК, Пн. – Пт.</Text>
    </Block>
  </Container>
);

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
`;
