import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useTheme } from "next-themes";

const FooterStyle = styled.div<{ theme: string }>`
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

const Footer = () => {

    const { resolvedTheme } = useTheme();
  return (
    <FooterStyle theme={resolvedTheme}>
      <Link href="https://www.termsfeed.com/live/27706681-597e-423d-a6e8-0cdb9d31176f">
        <a>Privacy Policy</a>
      </Link>
    </FooterStyle>
  );
};

export default Footer;
