import React from 'react'
import { Icon, Text } from './styles';

const Loading = ({ msg }) => (
  <div>
    <Icon />
    <Text>{msg || 'Carregando...'}</Text>
  </div>
);

export default Loading