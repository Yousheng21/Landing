import React, { FC } from "react";

import styled from "styled-components";

interface IProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<IProps> = (props) => (
  <Container onClick={props.onClick} className={props.className}>
    {props.title}
  </Container>
);

const Container = styled.button`
  background-color: ${(props) => props.theme.absolute100};
  padding: 15px 35px;
  border-radius: 65px;
`;
