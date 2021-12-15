import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Name,
  Banner,
  RateContainer,
  Rate
} from './styles';

export function SearchItem({ data }){

  return(
    <Container activeOpacity={0.7}>

      {
        data?.poster_path ? 
        <>
          <Banner 
          resizeMethod="resize"
          source={ { uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
          />
        </>
        :
      
        <Banner 
        resizeMethod="resize"
        source={ require("../../Assets/semfoto.png")}
        />

      }
     
      <Name>{data?.title}</Name>

      <RateContainer>
        <Ionicons 
          name="md-star"
          color="#E7A74E"
        />

        <Rate> {data?.vote_average}/10 </Rate>
      </RateContainer>
    </Container>
  )
}