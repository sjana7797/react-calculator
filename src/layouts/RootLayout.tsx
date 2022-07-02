import { AnimatePresence } from "framer-motion";
import { ReactElement, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/Menu";
type Props = { children: ReactElement };

function RootLayout({ children }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const Icon = showMenu ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Container>
          <MenuButton onClick={toggleMenu}>{Icon}</MenuButton>
          {showMenu && <Menu toggleMenu={toggleMenu} />}
          {children}
        </Container>
      </AnimatePresence>
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0px 10px;
`;

const MenuButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  cursor: pointer;
  color: #fff;
  & > svg {
    width: 30px;
    height: 30px;
  }
`;

export default RootLayout;
