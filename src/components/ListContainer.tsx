import React from "react";

import ListItem from "./ListItem";
import styled from "styled-components";
import { Heading1 } from "../styles/commonStyles";
import DateList from "./DateList";

const Container = styled.div`
  max-width: 100%;
  padding: 2px;
  margin: auto;
  background-color: white;
  @media (min-width: 800px) {
    width: 90%;
  }
`;

const ListContainer = ({ fixtures }: any) => {
  const matchDates = fixtures.response.map((fixture: any) =>
    new Date(fixture.fixture.date).toDateString()
  );

  const getDates = (matchDates: any) => {
    let dates = [];
    for (let i = 0; i < matchDates.length; i++) {
      if (matchDates[i] != matchDates[i - 1]) {
        dates.push(matchDates[i]);
      }
    }
    return dates;
  };

  return (
    <>
      <div>
        <Heading1>Stats of the day</Heading1>
        <Container>
          {getDates(matchDates).map((date) => (
            <DateList date={date} fixtures={fixtures} />
          ))}
        </Container>
      </div>
    </>
  );
};

export default ListContainer;
