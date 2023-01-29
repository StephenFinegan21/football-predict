import { Heading3, LeftBoldHeading} from "../styles/commonStyles"
import {Box, ComparisonBar} from "../components/index";
import { getColours } from "../functions/getColour";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  text-align: center;
`

type PredictionsProps = {
  data: {
    winner: {
      name: string;
    };  
    advice: string;
    percent: {
      home: string;
      draw: string;
      away: string;
    };
  };
  homeTeam: string;
  awayTeam: string;
};


const Predictions = (props: PredictionsProps) => {

  console.log(props)
  const {percent} = props.data
  const homeColours = getColours(props.homeTeam)
  const awayColours = getColours(props.awayTeam)

  const values = Object.keys(percent).map(function(key) {
    return percent[key as keyof typeof percent];
});

  return (
    <>
      <Box>
        <LeftBoldHeading>Predicted Winner</LeftBoldHeading>
        <Heading3>{props.data.winner.name}</Heading3>
        <LeftBoldHeading>Advice</LeftBoldHeading>
        <Heading3>{props.data.advice}</Heading3>
      </Box>
      <Box>
      <h2>Prediction % &#128221;</h2>
      <ComparisonBar values={values}
       homeColours={homeColours ? homeColours : ['rgb(108, 171, 221)', 'white']}
       awayColours={awayColours ? awayColours : ['rgb(239, 1, 7), white']} />
      <Grid>
        <p style={{textAlign:'left'}}>{props.homeTeam}</p>
        <p >Draw</p>
        <p style={{textAlign:'right'}}>{props.awayTeam}</p>
      </Grid>
      </Box>
    </>
  );
};

export default Predictions;
