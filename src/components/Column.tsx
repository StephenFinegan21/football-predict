import { type } from "os";
import styled from "styled-components";

const ColumnStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

type ColumnProps = {
  children: React.ReactNode;
};


const Column = (props: ColumnProps) => {
  return <ColumnStyle>{props.children}</ColumnStyle>;
};

export default Column;
