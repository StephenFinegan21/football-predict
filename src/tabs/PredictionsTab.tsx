import React from "react";
import { LightText, Heading2} from "../styles/commonStyles"
import Box from "../components/Box";

const Predictions = (props: any) => {
  return (
    <>
      <Box>
        <Heading2>Predicted Winner</Heading2>
        <LightText>{props.data.winner.name}</LightText>
        <Heading2>Advice</Heading2>
        <LightText>{props.data.advice}</LightText>
      </Box>
    </>
  );
};

export default Predictions;
