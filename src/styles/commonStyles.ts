import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: large;
`;

export const Heading2 = styled.h2`
  text-align: left;
  font-size: medium;
  padding: 0;
  margin-bottom: 2px;

  @media (min-width: 800px) {
    text-align: left;
    font-size: large;
    font-weight: 200;
  }
`;

export const LeftBoldHeading = styled.h2`
  font-size: medium;
  @media (min-width: 800px) {
    text-align: left;
    font-size: xx-large;
    font-weight: 800;
  }
`;

export const Heading3 = styled.h3`
  font-size: small;
  font-weight: 400;

  @media (min-width: 800px) {
    font-size: medium;
  }
  @media (min-width: 1200px) {
    font-size: large;
  }
`;

export const LightText = styled.h4`
  font-size: small;
  text-align: center;
  font-weight: 200;
  margin: 0;
  padding: 20px;
  padding-right: 18px;

  @media (min-width: 800px) {
    font-size: medium;
  }
`;
export const CenterText = styled.h2`
  font-size: small;
  text-align: center;
  font-weight: 600;

  @media (min-width: 800px) {
    font-size: x-large;
  }
`;

export const PageContainer = styled.div`
  max-width: 95%;
  padding: 5% 0;
  min-height: 100vh;
  margin: 0 auto;

  @media (min-width: 1200px) {
    max-width: 60%;
  }

  @media (min-width: 1800px) {
    max-width: 50%;
  }
`;

export const FlexCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImageContainer = styled.div<{ bg?: string }>`
  margin: auto;
  background-color: ${(props) => (props.bg ? `${props.bg}` : "")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecordTable = styled.table`
  max-width: 100%;
  font-size: smaller;
  border-collapse: collapse;
  margin: auto;

  padding: 20px 10px;

  @media (min-width: 600px) {
    font-size: medium;
  }
`;

export const Row = styled.tr`
  border-bottom: 1px solid #dfdfdf;
`;

export const TableData = styled.td`
  text-align: left;
  padding: 20px 15px;
`;
export const TableHead = styled.th`
  padding: 20px 10px;
  border-bottom: 1px solid #dfdfdf;
`;

export const FlexContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: "flex-start";
`;

export const ColouredResultCircle = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  width: 3px;
  height: 3px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  margin-right: 5px;
  font-size: xx-small;
  color: white;

  @media (min-width: 600px) {
    width: 6px;
    height: 6px;
  }
`;
