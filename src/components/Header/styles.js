import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: relative;
  padding: 10px 0;
  font-size: 14px;
  box-shadow: 0 2px 5px 1px rgba(0,0,0,.5);
  z-index: 1;
  background-image: linear-gradient(to top, #d2c86c, #f0e583);

  @media (min-width: 550px) {
    font-size: 16px;
  }

`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Link)`
  font-family: Merriweather, Georgia, Times, 'Times New Roman', serif;
  font-style: italic;
  text-decoration: none;
  color: currentColor;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  margin-left: 10px;
  font-size: 1.25em;
`;

export const LinkButton = styled(Link)`
  display: flex;
  padding: 6px 12px;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, .035);
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  color: currentColor;
  background-color: rgba(0, 0, 0, .035);
  opacity: ${({ isActive }) => isActive ? ".8" : "1"};

  &:hover {
    color: #444;
  }

  @media (min-width: 550px) {
    display: flex;
    margin-right: 10px;

    span {
      margin-right: 10px;
    }
  }

`;

export const Button = LinkButton.withComponent("button");