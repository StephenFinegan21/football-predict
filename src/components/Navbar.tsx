import styled from "styled-components";
import { Heading1 } from "../styles/commonStyles";
import { useTheme } from "next-themes";
import ThemeChanger from "./ThemeChanger";
import Link from "next/link";

const Navbar = () => {
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

  const { resolvedTheme } = useTheme();

  return (
    <Nav theme={resolvedTheme}>
      <ThemeChanger />
      <Link href={'/'}><Heading1><a>Stats of the day</a></Heading1></Link>
    </Nav>
  );
};

export default Navbar;
