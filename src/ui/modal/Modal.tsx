import React, { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { variants } from "./constants";

interface IProps {
  isVisible: boolean;
  handleClose: () => void;
}

export const Modal: FC<IProps> = ({ handleClose, isVisible }) => (
  <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
    {isVisible && (
      <Backdrop onClick={handleClose} className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 0.97 }} exit={{ opacity: 0 }}>
        <StModal onClick={(e) => e.stopPropagation()} variants={variants} initial="hidden" animate="visible" exit="exit">
          <Logo fill="#FF4C0D" className="mb-5" />
          <span className="font-black text-[18px]">Спасибо за заказ!</span>
          <span className="font-black text-[14px]">В ближайшее время с вами свяжется менеджер</span>
        </StModal>
      </Backdrop>
    )}
  </AnimatePresence>
);

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  z-index: 999;
`;

const StModal = styled(motion.div)`
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);
  background-color: white;
  margin: auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
