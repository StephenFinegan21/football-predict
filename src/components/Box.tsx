import styled from "styled-components";
import { useTheme } from "next-themes";
import React from "react";

const BoxStyle = styled.div<{ theme: string }>`
  max-width: 95%;
  background-color: ${(props) =>
    props.theme === "light" ? `#f1f1f1` : "#24292f"};
  transition: 0.3s;
  margin: 20px auto;
  padding: 2rem;

  @media (min-width: 1200px) {
    max-width: 70%;
    padding: 5rem;
  }
`;

type BoxProps = {
  children: React.ReactNode;
};


const Box = (props: BoxProps) => {
  const { resolvedTheme } = useTheme();

  return <BoxStyle theme={resolvedTheme}>{props.children}</BoxStyle>;
};

export default Box;
