import React from "react";
import styled from "styled-components";
import { Heading1 } from "../styles/commonStyles";
import { useTheme } from "next-themes";
import ThemeChanger from "./ThemeChanger";

const Nav = styled.div<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "light" ? `#ededed` : "rgb(36, 41, 47)"};
  transition: 0.3s;
  margin: 0;
  padding: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Nav theme={theme}>
      <ThemeChanger />
      <Heading1>Stats of the day</Heading1>
    </Nav>
  );
};

export default Navbar;
