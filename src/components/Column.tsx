import React from 'react'
import styled from 'styled-components';

const ColumnStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`


const Column = (props : any) => {
  return (
    <ColumnStyle>{props.children}</ColumnStyle>
  )
}

export default Column