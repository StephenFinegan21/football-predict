import React from "react";
import styled from "styled-components";
import { useTheme } from 'next-themes'


const ItemDiv = styled.div<{ highlight: boolean, theme: string }>`
  background-color: ${(props) => (props.theme === 'light' ? `#f4f4f4` : "#24292f")};
  transition: 0.3s;
  padding: 20px 0;
  width: 100%;
  border-radius: 4px;
  margin: 20px auto;
  cursor: ${(props) => (props.highlight ? "pointer" : "default")};
  &:hover {
    background: ${(props) => (props.highlight ? props.theme === 'light' ? "#dadadb" : "#2b4a67" : "")};
  }

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1800px) {
    width: 40%;
  }
`;

const Item = (props: any) => {
  const { resolvedTheme } = useTheme()
  const { highlight } = props;

  return <ItemDiv highlight={highlight} theme={resolvedTheme}>{props.children} </ItemDiv>;
};

export default Item;
