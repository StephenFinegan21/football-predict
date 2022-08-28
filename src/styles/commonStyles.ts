import styled from "styled-components";

export const TwoTeamGrid = styled.div`
  max-width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 5px;
  
`;

export const TwoTeamGridTables = styled.div`
  max-width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FlexCenterDiv = styled.div`
  display: flex;
  align-items: center;
  
  justify-content: space-between;
`;

export const Heading1 = styled.h1`
  text-align: center;
  font-size: medium;
`;

export const Heading2 = styled.h2`
  text-align: center;
  font-size: medium;
`;

export const ImageContainer = styled.div`
  width: 30px;
  
  @media (min-width: 800px) {
    width: 100px;
  }
`;

export const Heading3 = styled.h2`
  font-size: x-small;

  @media (min-width: 800px) {
    font-size: medium;
  }
`;

export const LightText = styled.h4`
  font-size: smaller;
  color: #666666;
  text-align: center;
  font-weight: 400;
margin: 0;
padding: 20px;

  @media (min-width: 800px) {
    font-size: medium;
  }
`;

export const UnderlinedHeading = styled.h4<{ isHomeTeam: boolean }>`
  font-size: small;
  color: #666666;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 5px;

  text-align: ${(props) => (props.isHomeTeam ? "left" : "right")};

  @media (min-width: 800px) {
    font-size: large;
  }
`;

export const TeamContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  

  text-align: center;
`;

export const SectionHeadingText = styled.p`
  font-size: small;
  color: #282828;
  text-align: center;
  font-weight: 800;

  @media (min-width: 800px) {
    font-size: x-large;
  }
`;

export const GridItem = styled.div`
  margin: 10px;
  padding-bottom: 10px;
`;

export const SectionContainer = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 5% 0;
  overflow: hidden;

  @media (min-width: 800px) {
  }
`;

export const RecordTable = styled.table<{ isHomeTeam: boolean }>`
  max-width: 100%;

  color: #7f7f7f;
  font-size: smaller;
  border-collapse: collapse;
  justify-content: "flex-start";

  @media (min-width: 600px) {
    justify-content: ${(props) =>
      props.isHomeTeam ? "flex-start" : "flex-end"};
    margin-left: ${(props) => (props.isHomeTeam ? "0px" : "40px")};
    margin-right: ${(props) => (props.isHomeTeam ? "40px" : "0px")};
  }
`;

export const Row = styled.tr`
  border-bottom: 1px solid #dfdfdf;
`;

export const TableData = styled.td`
  padding: 12px 10px;
`;
export const TableHead = styled.th`
  padding: 12px 10px;
`;

export const FlexContainer = styled.div<{ isHomeTeam: boolean }>`
  max-width: 100%;
  display: flex;
  justify-content: "flex-start";

  @media (min-width: 600px) {
    justify-content: ${(props) =>
      props.isHomeTeam ? "flex-start" : "flex-end"};
  }
`;
