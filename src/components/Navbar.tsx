import React from "react";
import styled from "styled-components";
import { Heading1 } from "../styles/commonStyles";

const Nav = styled.div`
  background-color: #162c41;
  margin: 0;
  padding: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  
`;
const Navbar = () => {
  return (
    <Nav>
      <Heading1>Stats of the day</Heading1>
    </Nav>
  );
};

export default Navbar;
