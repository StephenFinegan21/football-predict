import React from "react";
import Column from "./Column";
import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  width: 80%;
  
  @media (min-width: 600px) {
    font-size: medium;
  }
`;

const HeadingText = styled.h3`
  font-size: smaller;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 40px;
`

const BarChart = (props: any) => {
  const { stats, type, ann, titles, heading } = props;

 

  return (
    <><Column>
      <HeadingText>{heading}</HeadingText>
      <ChartContainer>
        <Bar color="rgb(18, 228, 186)" height={stats.first} title={titles[0]} ann={ann ? ann[0] : null} type={type === 'percentage' ? true : false}/>
        <Bar color="rgb(103, 39, 232)" height={stats.second} title={titles[1]}ann={ann ? ann[1] : null} type={type === 'percentage' ? true : false} />
        {Object.keys(stats).length > 2 &&

        <Bar color="rgb(231, 30, 104)" height={stats.third} title={titles[2]} ann={ann ? ann[2] : null} type={type === 'percentage' ? true : false} />
        }
      </ChartContainer>
      </Column>
    </>
  );
};

export default BarChart;

type BarProps = {
  color: string;
  height: number;
  title: string;
  ann? : any
  type? : boolean
};

const Bar = (props: BarProps) => {
  const { color, height, title, ann, type } = props;

  const BarStyle = styled.div`
    height: 100px;
    background-color: #223c54;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 2px;
    display: flex;
    width: 10px;
  

    @media (min-width: 600px) {
      height: 160px;
      width: 60px;
      margin: 10px;
    }
  `;

  const ChartText = styled.div`
    font-size: x-small;
  `

  const Height = styled.div<{ color: string; height: number }>`
    height: 100px;
    width: 10px;
    background-color: ${(props) => props.color};
    height: ${(props) => props.height}%;

    @media (min-width: 600px) {
      height: ${(props) => props.height}%;
      width: 60px;
    }
  `;
  return (
    <Column>
    
      <ChartText>{ann ? ann : height}{type && '%' }</ChartText>
      <BarStyle>
        <Height color={color} height={height} />
      </BarStyle>
      <ChartText>{title}</ChartText>
    </Column>
  );
};
