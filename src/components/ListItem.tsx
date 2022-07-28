import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FixtureInformation from "../pages/FixtureInformation/[slug]";

const FixtureItem = styled.div`
  border: 1px solid #1f1f1f;
  padding: 20px 10px;
  width: 100%;
  background-color: #fcfcfc;
 
`;

const TeamsFlexContainer = styled.div`

display: flex;
justify-content: space-evenly;
  
`;

const TeamContainer = styled.div`

width: 50%;
  
`;

const ListItem = (props: any) => {
  const { fixture, teams } = props.item;
  console.log(fixture);

  const date = new Date(fixture.date);
  return (
    <FixtureItem>
      <p>{date.toDateString()}</p>
      <TeamsFlexContainer>
        <TeamContainer>
        
        <Image
          src={"/Chelseabadge.png"}
          alt={teams.home.name + "crest"}
          width={50}
          height={50}
        />
        <p>{teams.home.name}</p>
        </TeamContainer>
        <TeamContainer>
        

        <Image
          src={"/ChelseaBadge.png"}
          alt={teams.away.name + "crest"}
          width={50}
          height={50}
        />
        <p>{teams.away.name}</p>
        </TeamContainer>
      </TeamsFlexContainer>
      <Link href={`/FixtureInformation/${fixture.id}`}> link</Link>
    </FixtureItem>
  );
};

export default ListItem;
