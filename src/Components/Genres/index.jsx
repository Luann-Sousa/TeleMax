import React from 'react';
import { 
  Container,
  Title
 } from './styles';

export function Genres({ data }){
  return(
    <Container>
      <Title>{data.name}</Title>
    </Container>
  );
};