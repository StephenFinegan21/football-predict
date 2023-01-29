;
import styled from "styled-components";
import { useTheme } from 'next-themes'
import { globalTheme } from "../styles/theme";

const Bar = styled.div`
  max-width: 100%;
  height: 10px;
  background-color: #e2e3e3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

const ScoreText = styled.p<{ value: number }>`
  color: ${(props) =>
    props.value > 70 ? "#1fac92" : props.value < 40 ? "#eb428b" : "#eebc72"};

  color: #f5f1f1;
  padding: 0;
  margin: 0;
  padding-left: 20px;
`;

type statProps = {
  annotation?: string;
  value: string;
};

const Block = styled.div`
  display: block;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const FormString = styled.p<{ theme: string }>`
  margin: 0;
  letter-spacing: 3px;
  color:  ${(props) => (props.theme === 'light' ? globalTheme.colour.DARK :  globalTheme.colour.LIGHT )};
  transition:0.3s;
  font-size: 0.8rem;
`;

const PercentBar = ({ annotation, value }: statProps) => {
  const { resolvedTheme } = useTheme()

  const sliderColour =
    parseInt(value) > 70
      ? globalTheme.colour.WIN
      : parseInt(value) < 40
      ? globalTheme.colour.LOSS
      : globalTheme.colour.DRAW
  return (
    <>
      <Block>
        <FormString theme={resolvedTheme}>{annotation}</FormString>
        <Flex>
          <Bar>
            <div
              style={{
                maxWidth: "100%",
                width: `${value}`,
                borderRadius: "5px",
                background: sliderColour,
                height: "100%",
              }}
            ></div>
          </Bar>
          <ScoreText value={parseInt(value)}>{value}</ScoreText>
        </Flex>
      </Block>
    </>
  );
};

export default PercentBar;
