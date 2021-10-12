import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  MenuButton,
  Titule
} from './styles';

import { useNavigation } from '@react-navigation/native';
export function Header({ title }){

const navigation = useNavigation();

  return(
    <Container>
      <MenuButton onPress={ ()=> navigation.openDrawer() }>
        <Feather 
          name='menu'
          size={36}
          color="white"
        />
        <Titule>{ title }</Titule>
      </MenuButton>
    </Container>
  )
}