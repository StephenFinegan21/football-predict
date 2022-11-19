import React from "react";
import { Heading2, LeftBoldHeading} from "../styles/commonStyles"
import Box from "../components/Box";
import ComparisonBar from "../components/ComparisonBar";

const Predictions = (props: any) => {
  const {percent} = props.data


  const values = Object.keys(percent).map(function(key) {
    return percent[key];
});

  return (
    <>
      <Box>
        <LeftBoldHeading>Predicted Winner</LeftBoldHeading>
        <Heading2>{props.data.winner.name}</Heading2>
        <LeftBoldHeading>Advice</LeftBoldHeading>
        <Heading2>{props.data.advice}</Heading2>
      </Box>
      <Box>
      <h2>Total &#128221;</h2>
      <ComparisonBar values={values} />
      </Box>
    </>
  );
};

export default Predictions;
