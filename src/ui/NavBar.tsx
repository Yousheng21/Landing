import React, { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { Modal } from "./modal/Modal";

const links: Array<Record<"title" | "path", string>> = [
  { title: "О продукте", path: "#about" },
  { title: "Внешний вид", path: "#ui" },
  { title: "Безопасность", path: "#security" },
];

export const NavBar = () => {
  const theme = useTheme();

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

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
      <BtnBuy
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="sm:flex hidden justify-self-end"
        onClick={() => (modalOpen ? close() : open())}
      >
        Купить
      </BtnBuy>

      <Modal handleClose={close} isVisible={modalOpen} />
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

const BtnBuy = styled(motion.button)`
  background-color: ${(props) => props.theme.absolute100};
  padding: 15px 35px;
  border-radius: 65px;
`;
