import React from "react";

import ListItem from "./ListItem";
import styled from "styled-components";
import { Heading1 } from "../styles/commonStyles";

const Container = styled.div`
  width: 100%;
  margin: auto;
  background-color: white;
  @media (min-width: 800px) {
    width: 90%;
  }
`;

const ListContainer = ({ fixtures }: any) => {
  return (
    <>
      <div>
        <Heading1>Stats of the day</Heading1>
        <Container>
          {fixtures &&
            fixtures.response.map((fixture: any) => (
              <ListItem item={fixture} key={fixture.fixture.id} />
            ))}
        </Container>
      </div>
    </>
  );
};

export default ListContainer;
