import styled from 'styled-components';

const colors = {
  gray: "#ccc",
  green: "#27ae60", 
}

export const Checkbox = styled.div`
  position: relative;
  display: inline-block;
  width: 1.75em;
  height: 1em;
  border-radius: .5em;
  cursor: pointer;
  border: solid 2px ${({ isActive }) => isActive ? colors.green : colors.gray };
  background-color: ${({ isActive }) => isActive ? colors.green : colors.gray };

  &:after {

    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 50%;
    border-radius: 50%;
    box-shadow: .5px .5px 0 0 #aaa;
    background-image: linear-gradient(to top, #fff, #f5f5f5);
    right: ${({ isActive }) => isActive ? 0 : "auto" };

  }

`;
