import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import { FlexCenterDiv, Heading2 } from "../styles/commonStyles";


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
      <FlexCenterDiv>
        <Heading2>{date}</Heading2>
      </FlexCenterDiv>
      {checkFixtures().map((f) => (
        <ListItem fixture={f} key={f.fixture.id} />
      ))}
    </>
  );
};

export default DateList;
