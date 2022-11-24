import React from "react";
import FixtureDataNav from "./FixtureDataNav";
import TeamRecentForm from "./TeamRecentForm";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import styled from "styled-components";
import { FlexCenterDiv, Heading3 } from "../../styles/commonStyles";
import Column from "../Column";

const BackContainer = styled.div`
  font-size: xx-large;
  cursor: pointer;

  &:hover {
    color: #c334e3;
  }
`;

type headerProps = {
  teams: any;
  currentTab: string;
  changeTab: Function;
};

const FixtureHeader = ({ teams, currentTab, changeTab }: headerProps) => {
  return (
    <>
      <Link href={`/`}>
        <BackContainer>
          <IoMdArrowRoundBack />
        </BackContainer>
      </Link>

      <FlexCenterDiv>
        <Column>
          <Image
            src={teams.home.logo}
            alt={teams.home.name + "crest"}
            width={50}
            height={50}
          />
         <Link href={`/${teams.home.id}`}><Heading3><a>{teams.home.name}</a></Heading3></Link>
          {!teams?.home.league.form && <p>No form</p>}
          {teams.home.league.form && (
            <TeamRecentForm form={teams?.home.league.form} />
          )}
        </Column>

        <Column>
          <Image
            src={teams.away.logo}
            alt={teams.away.name + "crest"}
            width={50}
            height={50}
          />

<Link href={`/${teams.away.id}`}><Heading3><a> {teams.away.name}</a></Heading3></Link>

          {!teams?.away.league.form && <p>No form</p>}
          {teams.away.league.form && (
            <TeamRecentForm form={teams?.away.league.form} />
          )}
        </Column>
      </FlexCenterDiv>
      <FixtureDataNav currentTab={currentTab} changeTab={changeTab} />
    </>
  );
};

export default FixtureHeader;
