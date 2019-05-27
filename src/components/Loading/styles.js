import styled, { keyframes } from 'styled-components';

export const Icon = styled.div`
  margin: 75px auto 15px auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 5px #30323c;
  border-left-color: transparent;
  animation: ${spin} .75s linear infinite; 
`;

export const Text = styled.p`
  text-align: center;  
`;

const spin = keyframes`
  from { 
    transform: rotate(0deg); 
  }

  to { 
    transform: rotate(360deg); 
  }
`;