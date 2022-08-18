import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Fixture = styled.div `
  background-color: #ffffff;
  padding: 25px;
  border: 1px solid black;
  margin:  25px auto;
`

const FixtureDetails = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TeamContainer = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const DateContainer = styled.div `
  width: 100%;
  text-align: center;
`


const ListItem = (props: any) => {
  const { fixture, teams } = props.item;
 

  const date = new Date(fixture.date);
  return (
    <>
      <Fixture>
        <FixtureDetails>
          <TeamContainer>
            
            <Image
              src={teams.home.logo}
              alt={teams.home.name + "crest"}
              width={50}
              height={50}
            />
            <p>{teams.home.name}</p>
          </TeamContainer>
          <DateContainer>
          <p>{date.toDateString()}</p>
          </DateContainer>
          <TeamContainer>
          
            <Image
              src={teams.away.logo}
              alt={teams.away.name + "crest"}
              width={50}
              height={50}
            />
            <p>{teams.away.name}</p>
            
          </TeamContainer>
        </FixtureDetails>
        <DateContainer>
          <Link href={`/FixtureInformation/${fixture.id}`}>Stats</Link>
        </DateContainer>
      </Fixture>
    </>
  );
};

export default ListItem;
