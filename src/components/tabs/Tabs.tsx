import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import styled, { useTheme } from "styled-components";

import { tabs } from "./constants";

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const theme = useTheme();

  return (
    <div id="about">
      <Nav>
        <TabsContainer>
          {tabs.map((item) => (
            <TabMotion
              key={item.title}
              initial={false}
              animate={{
                color: item === selectedTab ? theme.text : "grey",
                fontWeight: item === selectedTab ? "700" : "500",
              }}
              onClick={() => setSelectedTab(item)}
            >
              <span className="pb-3">{item.title}</span>
              {item === selectedTab ? <UnderlineMotion layoutId="underline" id="underline" /> : null}
            </TabMotion>
          ))}
        </TabsContainer>
      </Nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col align-middle justify-center gap-10"
          >
            <TextInfo>{selectedTab ? selectedTab.info : "😋"}</TextInfo>
            <div className="flex justify-center">
              {selectedTab.images.map((path) => (
                <img key={path} width={"60%"} height={"40%"} className="rounded-xl" src={path} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

const Nav = styled.nav`
  padding: 5px 5px 0;
  margin-bottom: 30px;
`;

const TabsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
  display: flex;
  width: 100%;
`;

const TabMotion = styled(motion.li)`
  list-style: none;
  margin: 0;
  font-size: 20px;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 1;
`;

const UnderlineMotion = styled(motion.div)`
  position: absolute;
  height: 2px;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: ${(props) => props.theme.orange};
  margin-top: 30px;
`;

const TextInfo = styled.span`
  text-align: center;
  color: ${(props) => props.theme.text};
  font-size: 20px;
`;
