import React from 'react';
import { WebView } from 'react-native-webview';
import { 
  Title,
  BackButton
} from './styles';
import { Feather } from '@expo/vector-icons';

export function ModalLink({ link, title, closedModal}){
  return(
    <>
      <BackButton onPress={ ()=> closedModal()}>
        <Feather
          name="x"
          size={ 35 }
          color="#FFF" 
        />
        <Title numberOfLines={ 1}>{ title }</Title>
      </BackButton>
      <WebView 
          source={{ uri: link}}
      />
    </>
  );
};