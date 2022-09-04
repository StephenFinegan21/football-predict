import styled from "styled-components";


export const PageContainer = styled.div`
  max-width: 95%;
  padding: 5% 0;
  min-height: 100vh;
  margin: auto;

  @media (min-width: 1200px) {
    max-width: 60%;
  }

  @media (min-width: 1800px) {
    max-width: 50%;
  }
`;

export const TwoTeamGrid = styled.div`
  max-width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 5px;
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
  font-size: xx-small;

  @media (min-width: 800px) {
    font-size: medium;
  }
`;

export const LightText = styled.h4`
  font-size: small;
  color: #666666;
  text-align: center;
  font-weight: 400;
  margin: 0;
  padding: 20px;
  padding-right: 18px;


  @media (min-width: 800px) {
    font-size: medium;
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


export const RecordTable = styled.table`
  max-width: 100%;

  color: #7f7f7f;
  font-size: smaller;
  border-collapse: collapse;
  margin: 60px auto;

  @media (min-width: 600px) {
    
 
  }
`;

export const Row = styled.tr`
  border-bottom: 1px solid #dfdfdf;
`;

export const TableData = styled.td`
font-size: large;
width: 100%;
text-align: left;
padding: 20px 14px;

`;
export const TableHead = styled.th`
  padding: 20px 14px;
  border-bottom: 1px solid #dfdfdf;
`;

export const FlexContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: "flex-start";

  @media (min-width: 600px) {
  
  }
`;

export const ColouredResultCircle = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  width: 6px;
  height: 6px;
  border-radius: 50%;
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 5px;
  color: #f5f5f5;
  margin-right: 5px;
  font-weight: 800;
  font-size: xx-small;
`;
