import React from "react";
import styled from "styled-components";

const ItemDiv = styled.div<{ highlight: boolean }>`
  background-color: #162c41;
  padding: 20px 0;
  width: 100%;
  border-radius: 4px;
  margin: 20px auto;
  cursor: ${(props) => (props.highlight ? "pointer" : "default")};
  &:hover {
    background: ${(props) => (props.highlight ? "#2b4a67" : "#162c41")};
  }

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1800px) {
    width: 40%;
  }
`;

const Item = (props: any) => {
  const { highlight } = props;

  return <ItemDiv highlight={highlight}>{props.children}</ItemDiv>;
};

export default Item;
