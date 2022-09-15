import React from "react";
import styled from "styled-components";


 const Heading1 = styled.h1`
  text-align: center;
  font-size: medium;
  margin: 0;
  line-height: 100px;
`;

const Nav = styled.div`
  background-color: #162c41;
  margin: 0;
  padding: 0;
  height: 100px;

`;
const Navbar = () => {
  return (
    <Nav>
      <Heading1>Stats of the day</Heading1>
    </Nav>
  );
};

export default Navbar;
