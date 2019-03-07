import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
  position: fixed;
  width: 400px;
  display: none;
  transform: translateX(-50%);
  border-radius: 3px;
  box-shadow: 0 1px 2px 2px #ddd;
  background-color: #fafafa;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: solid 10px transparent;
    border-bottom-color: #fafafa;
    top: -20px;
    left: 50%;
    transform: translate(-50%);
  }
`;
