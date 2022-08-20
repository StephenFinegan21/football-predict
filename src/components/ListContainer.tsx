import React from "react";


import ListItem from "./ListItem";
import styled from "styled-components";
import {Centered} from '../styles/commonStyles'

const Container = styled.div`
  width: 100%;
  margin:auto;

  @media (min-width: 800px) {
    width: 90%;
   
  }
`



const ListContainer = ({ fixtures }: any) => {
//  console.log(fixtures.response)
  return (
    <>
      <div >
        <Centered>Stats of the day</Centered>
    
        <Container>
          {fixtures && fixtures.response.map((fixture: any) => (
            <ListItem item={fixture}
            key={fixture.fixture.id} />
          ))}
        </Container>
        
      </div>
    </>
  );
};

export default ListContainer;
