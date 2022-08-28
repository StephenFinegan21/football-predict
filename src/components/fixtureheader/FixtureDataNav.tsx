import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { LightText, SectionContainer } from "../../styles/commonStyles";

type navProps = {
  currentTab: string;
  changeTab: Function;
};

const NavContainer = styled.div`

  border-bottom: 2px solid #7a7a7a;
  display: flex;
  justify-content: flex-start;
  gap: 5%;
  padding-bottom:5px;
  padding-top: 20px;
  overflow: auto;
  white-space: nowrap;

 
  
`;

const NavList = styled.li<{ current: boolean }>`
  opacity: ${(props) => (props.current ? "100%" : "40%")};
  text-decoration: ${(props) => (props.current ? "underline" : "none")};;
  text-underline-offset: 5px;
  max-width: 100%;
  list-style: none;
  cursor: pointer;
 

`;

const FixtureDataNav = ({ currentTab, changeTab }: navProps) => {
  return (
    <>
   
      <NavContainer>
        
        <NavList
          current={currentTab === "last-five"}
          onClick={() => changeTab("last-five")}
        >
          <LightText>Last 5</LightText>
        </NavList>
        <NavList
          current={currentTab === "comparison"}
          onClick={() => changeTab("comparison")}
        >
          <LightText>Compare</LightText>
        </NavList>
        <NavList
          current={currentTab === "predictions"}
          onClick={() => changeTab("predictions")}
        >
          <LightText>Prediction</LightText>
        </NavList>
        <NavList
          current={currentTab === "record"}
          onClick={() => changeTab("record")}
        >
          <LightText>Record</LightText>
        </NavList>

        <NavList
          current={currentTab === "goals"}
          onClick={() => changeTab("goals")}
        >
          <LightText>Goals</LightText>
        </NavList>

        <NavList
          current={currentTab === "h2h"}
          onClick={() => changeTab("h2h")}
        >
          <LightText>Head to Head</LightText>
        </NavList>
      
      </NavContainer>
   
    </>
  );
};

export default FixtureDataNav;
