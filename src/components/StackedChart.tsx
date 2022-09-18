import React from "react";
import styled from "styled-components";

const Chart = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 50px;
  margin: auto;
`;

const Bar = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  width: 50px;
`;

const Value = styled.div<{ height: string; bg: string }>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: small;
`;

const getPercentage = (metric: number, total: number) => {
  const score: number = Math.floor((metric / total) * 100);
  return score.toString();
};

const StackedChart = ({ data, total }: any) => {
  //console.log(getPercentage(data.total.total, total) + "%");
  return (
    <>
      <Chart>
        <Bar height={getPercentage(data.total.total, total) + "%"}>
          <Value
            height={getPercentage(data.total.home, data.total.total) + "%"}
            bg="#521ffa"
          >
            {data.total.home}
          </Value>
          <Value
            height={getPercentage(data.total.away, data.total.total) + "%"}
            bg="#c334e3"
          >
            {data.total.away}
          </Value>
        </Bar>
      </Chart>
    </>
  );
};

export default StackedChart;
