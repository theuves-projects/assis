import styled from 'styled-components';
import Avatar from '../../Avatar';
import { LoadingEffect } from '../../../styles/keyframes';

export const UserAvatar = styled(Avatar)`
  @media (min-width: 550px) {
    width: 1em;
    height: 1em !important;
    border-radius: 50%;
    animation: 1s LoadingEffect linear infinite alternate;
    transform: scale(1.25);
  }

`;