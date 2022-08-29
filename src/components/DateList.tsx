import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import { LightText } from "../styles/commonStyles";

const DateContainer = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 90%;
  text-align: center;

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1800px) {
    width: 50%;
  }
`;

const DateList = ({ date, fixtures }: any) => {
  const checkFixtures = () => {
    let matches = [];
    for (let i in fixtures.response) {
      if (new Date(fixtures.response[i].fixture.date).toDateString() === date) {
        matches.push(fixtures.response[i]);
      }
    }

    return matches;
  };

  return (
    <>
      <DateContainer>
        <LightText>{date}</LightText>
      </DateContainer>
      {checkFixtures().map((f) => (
        <ListItem fixture={f} key={f.fixture.id} />
      ))}
    </>
  );
};

export default DateList;
