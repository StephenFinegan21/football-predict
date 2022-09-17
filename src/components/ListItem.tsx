import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import {
  Heading3,
  FlexCenterDiv,
  ImageContainer,
} from "../styles/commonStyles";
import Item from "./Item";
import Column from "./Column";

const Block = styled.div`
  display: block;
`;

const ListItem = (props: any) => {
  const { fixture, teams, goals, league } = props.fixture;

  return (
    <>
      {
        <Item highlight={goals.home == null}>
          <Link
            href={
              goals.home == null ? `/FixtureInformation/${fixture.id}` : "#"
            }
          >
            <FlexCenterDiv>
              <Column>
                <ImageContainer>
                  <Image
                    src={teams.home.logo}
                    alt={teams.home.name + "crest"}
                    width={35}
                    height={35}
                  />
                </ImageContainer>
                <Heading3>{teams.home.name}</Heading3>
              </Column>
              <Block>
                <ImageContainer bg="white">
                  <Image
                    src={league.logo}
                    alt={league.logo + "logo"}
                    width={20}
                    height={20}
                  />
                </ImageContainer>
                {goals.home !== null && (
                  <FlexCenterDiv>
                    <p>{goals.home}</p>
                    <p> - </p>
                    <p>{goals.away}</p>
                  </FlexCenterDiv>
                )}
              </Block>
              <Column>
                <ImageContainer>
                  <Image
                    src={teams.away.logo}
                    alt={teams.away.name + "crest"}
                    width={35}
                    height={35}
                  />
                </ImageContainer>
                <Heading3>{teams.away.name}</Heading3>
              </Column>
            </FlexCenterDiv>
          </Link>
        </Item>
      }
    </>
  );
};

export default ListItem;
