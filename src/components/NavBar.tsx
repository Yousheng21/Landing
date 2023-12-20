import React from "react";

import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { Spacer } from "../styles/common";

import { Button } from "./Button";

const links: Array<Record<"title" | "path", string>> = [
  { title: "Payment", path: "/payment" },
  { title: "Feedback", path: "/feedback" },
  { title: "Feedback", path: "/feedback" },
  { title: "Feedback", path: "/feedback" },
];

export const NavBar = () => {
  const theme = useTheme();

  return (
    <Container>
      <div className="flex gap-5">
        <Link to="/">
          <Logo />
        </Link>
        <ListLinks>
          {links.map((link) => (
            <Link style={{ color: theme.text }} to={link.path}>
              {link.title}
            </Link>
          ))}
        </ListLinks>
      </div>
      <div className="flex justify-end">
        <Button title="Buy" />
      </div>
    </Container>
  );
};

const Container = styled(Spacer)`
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ListLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
