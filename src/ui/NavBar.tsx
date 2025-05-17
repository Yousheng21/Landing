import React from "react";

import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { Button } from "./Button";

const links: Array<Record<"title" | "path", string>> = [
  { title: "О продукте", path: "#about" },
  { title: "Внешний вид", path: "#ui" },
  { title: "Безопасность", path: "#security" },
];

export const NavBar = () => {
  const theme = useTheme();

  return (
    <Container>
      <div className="flex gap-32">
        <Link to="/">
          <Logo fill={theme.logo} />
        </Link>
        <ListLinks>
          {links.map((link) => (
            <a key={link.path} style={{ color: theme.text }} href={link.path}>
              {link.title}
            </a>
          ))}
        </ListLinks>
      </div>
      <div className="hidden justify-end sm:flex">
        <Button title="Купить" />
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const ListLinks = styled.div`
  width: 100%;
  display: flex;
  gap: 100px;
  font-size: 14px;
`;
