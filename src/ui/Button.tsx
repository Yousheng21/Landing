import React, { FC } from "react";

import styled from "styled-components";

interface IProps {
  /** defines title for component */
  title: string;
  /** click event handler */
  onClick?: () => void;
  /** defines class attribute for component */
  className?: string;
}

/**
 * @description Renders a component.
 * @param {IProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 * @example
 * <Button
 *    title="newTask"
 *    className="button"
 *    onClick={() => void}
 * />
 */

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
