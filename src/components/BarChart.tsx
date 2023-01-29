import Column from "./Column";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { globalTheme } from "../styles/theme";

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  width: 100%;


  @media (min-width: 600px) {
    font-size: medium;
    width: 85%;
  }
`;

const HeadingText = styled.h3`
  font-size: smaller;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 40px;

  @media (min-width: 800px) {
    font-size: medium;
    width: 85%;
  }
`;

type BarChartProps = {
  stats: {
    first: number;
    second: number;
    third?: number 
  }
  type: string;
  ann?: string[];
  titles: string[];
  heading: string;
};

const BarChart = (props: BarChartProps) => {
  const { stats, type, ann, titles, heading } = props;

  return (
    <>
      <div>
        <HeadingText>{heading}</HeadingText>
        <ChartContainer>
          <Bar
            color={globalTheme.colour.WIN}
            height={isNaN(stats.first) ? 0 : stats.first}
            title={titles ? titles[0] : ''}
            ann={ann ? ann[0] : undefined}
            type={type === "percentage" ? true : false}
          />
          <Bar
            color={globalTheme.colour.DRAW}
            height={isNaN(stats.second) ? 0 : stats.second}
            title={titles[1]}
            ann={ann ? ann[1] : undefined}
            type={type === "percentage" ? true : false}
          />
          {Object.keys(stats).length > 2 && (
            <Bar
              color={globalTheme.colour.LOSS}
              height={stats.third && isNaN(stats.third) ? 0 : stats.third}
              title={titles[2]}
              ann={ann ? ann[2] : undefined}
              type={type === "percentage" ? true : false}
            />
          )}
        </ChartContainer>
      </div>
    </>
  );
};

export default BarChart;

type BarProps = {
  color: string;
  height: number | undefined;
  title: string | undefined;
  ann?: string;
  type?: boolean;
};

const Bar = (props: BarProps) => {
  const { color, height, title, ann, type } = props;
  const { resolvedTheme } = useTheme();

  const BarStyle = styled.div<{ theme: string }>`
    height: 100px;
    background-color: ${(props) =>
      (props.theme === 'light' ? globalTheme.colour.LIGHT : globalTheme.colour.DARK)};
    display: flex;
    flex-direction: column;
    justify-content: end;

    margin-top: 10px;
      padding: 2px;
     
     
    display: flex;
    width: 10px;

    @media (min-width: 800px) {
      height: 160px;
      width: 60px;
      margin: 10px;
    }
  `;

  const ChartText = styled.div`
    font-size: x-small;
    padding: 5px;
    @media (min-width: 800px) {
      font-size: medium;
    }
  `;

  const Height = styled.div<{ color: string; height: number }>`
    height: 100px;
    width: 10px;
    background-color: ${(props) => props.color};
    height: ${(props) => props.height}%;

    @media (min-width: 800px) {
      height: ${(props) => props.height}%;
      width: 60px;
    }
  `;
  return (
    <Column>
      <ChartText>
        {ann ? ann : height}
        {type && "%"}
      </ChartText>
      <BarStyle theme={resolvedTheme}>
        <Height color={color} height={height ? height : 0} />
      </BarStyle>
      <ChartText>{title}</ChartText>
    </Column>
  );
};
