import React from "react";
import styled from "styled-components";
import { useTheme } from 'next-themes'


const ItemDiv = styled.div<{ highlight: boolean, theme: string }>`
  background-color: ${(props) => (props.theme === 'light' ? `#f1f1f1` : "#24292f")};
  padding: 20px 0;
  width: 100%;
  border-radius: 4px;
  margin: 20px auto;
  cursor: ${(props) => (props.highlight ? "pointer" : "default")};
  &:hover {
    background: ${(props) => (props.highlight ? props.theme === 'light' ? "#e9e9e9" : "#2b4a67" : "")};
  }

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1800px) {
    width: 40%;
  }
`;

const Item = (props: any) => {
  const { theme, setTheme } = useTheme()
  const { highlight } = props;

  return <ItemDiv highlight={highlight} theme={theme}>{props.children} </ItemDiv>;
};

export default Item;
