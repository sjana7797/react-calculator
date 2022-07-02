import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = { toggleMenu: () => void };

function Menu({ toggleMenu }: Props) {
  const container = {
    hidden: { y: -10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 100 },
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const menus = [
    { title: "calculator", link: "/calculator" },
    { title: "age calculator", link: "/age-calculator" },
  ];
  return (
    <Navigation>
      <Container variants={container} initial="hidden" animate="show">
        {menus.map((menu, index) => (
          <Item key={index} variants={item} onClick={toggleMenu}>
            <Link to={menu.link}>{menu.title}</Link>
          </Item>
        ))}
      </Container>
    </Navigation>
  );
}

const Navigation = styled.nav`
  position: absolute;
  left: 10px;
  top: 60px;
  z-index: 1000;
`;
const Container = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
const Item = styled(motion.li)`
  background-color: var(--primary);
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--dark);
  }
  & > a {
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default Menu;
