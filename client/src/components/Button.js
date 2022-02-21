import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${({width}) => width || '6.5vw'};
  height: ${({height}) => height || '3vw'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  background: ${({background}) => background || '#4682B4'};
  &:hover {
    background: #afeeee;
    color: black;
  }
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
