import React, { useState, useEffect } from 'react';
import { Container, ListMovies } from './styles';

import { api, key_api } from '../../Services/api';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SearchItem } from '../../Components/SeachItem';

export function Search(){
  const [ movie, setMovie ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const navigation = useNavigation();//para fazer navegação entre telas
  const route = useRoute();//para pegar os dados que mandamos pra essa tela atual

  useEffect( ()=> {
    let isActive = true;

    async function getSearchMovie(){
      const response = await api.get("/search/movie", {
        params:{
          query: route?.params?.name,
          api_key: key_api,
          language: 'pt-BR',
          page: 1,
        }
      })

      if(isActive){
        setMovie(response.data.results);
        // console.log(response.data.results)
        setLoading(false)
      }
    };

    if(isActive){
      getSearchMovie();
    }
  }, [])
  if(loading){
    return(
      <Container>

      </Container>
    )
  }
  return(
    <Container>
     <ListMovies 
      data={movie}
      showsVerticalScrollIndicator={false}
      keyExtractor={ (item)=> String(item.id)}
      renderItem={ ({item})=> (
        <SearchItem data={item}/>
      )}
     />
    </Container>
  )
}