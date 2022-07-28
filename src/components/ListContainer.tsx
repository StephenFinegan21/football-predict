import React from "react";
import styled from "styled-components";
import { RootObject } from "../types";
import ListItem from "./ListItem";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  gap: 10px;
`;

const ListContainer = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <Container>
        <h2>Fixtures</h2>
        <GridContainer>
          {data.map((fixture: any) => (
            <ListItem item={fixture} />
          ))}
        </GridContainer>
      </Container>
    </>
  );
};

export default ListContainer;
