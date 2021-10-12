import React, { useState, useEffect } from 'react';
import { ScrollView, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';//pegar os dados que mandamos por parametro
import { Feather, Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import { 
  Container,
  Header,
  HeaderButton,
  BannerBackgroud,
  ButtonLink,
  ContainerArea,
  Title,
  Rate,
  ListGenres,
  Description,
} from './styles';
import { api, key_api } from '../../Services/api';
import { Genres } from '../../Components/Genres';
import { ModalLink } from '../../Components/ModalLink';
export function Details(){
  const nagation = useNavigation();
  const route  = useRoute();

  const [movie, setMovie] = useState({});
  const [isVisibleOpenModal, setisVisibleOpenModal] = useState(false);

  useEffect( ()=> {

    let isActive = true;
    const ac = new AbortController();// monitora as funcao assicronas

    async function getMovie(){
      const response = await api.get(`/movie/${route.params?.id}`, {
        params:{
          api_key: key_api,
          language: 'pt-BR',
        }
      })
      .catch( ( error )=> console.log(error));
      
      if(isActive){
        setMovie(response.data)
        
      }
    };
    
    if(isActive){
      getMovie();
    };
    //componente foi desmontado
    return () => {
      isActive = false;
      ac.abort();// abortar nossas funcao assicronas tabem 
    }
    
  }, []);
  return(
    <Container>
      <Header>
        <HeaderButton
          activeOpacity={ 0.7 }
          onPress={ ()=> nagation.goBack() }
        >
          <Feather
            name="arrow-left" 
            size={28}
            color="#FFF"
          />
        </HeaderButton>

        <HeaderButton>
          <Ionicons
            name="bookmark" 
            size={28}
            color="#FFF"
          />
        </HeaderButton>
      </Header>
      <BannerBackgroud
          resizeMethod="resize"
          source={ { uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}} 
      />

      <ButtonLink
        onPress={ ()=> setisVisibleOpenModal(true) }
      >
        <Feather
          name="link" 
          size={ 24 }
          color="#FFF"
        />
      </ButtonLink>
      <Title numberOfLines={2}> {movie.title} </Title>

      <ContainerArea>
        <Stars 
          default={movie.vote_average} // qtd de start padrao
          count={ 10 } // quantidades de stars
          half={ true } // stars por metade
          starSize={ 20 } // tamanho
          fullStar={ <Ionicons name="md-star" size={ 24 } color="#E7A74E"/> } // quando estiver com a stars completa oque ira mostrar
          emptyStar={ <Ionicons name="md-star-outline" size={ 24 } color="#E7A74E"/> } // quando estiver com a stars que nao estar completa oque ira mostrar
          halfStar={ <Ionicons name="md-star-half" size={ 24 } color="#E7A74E"/> } // quando estiver com a stars pela metade oque ira mostrar
          disable={ true } //niguem pode mecher
        />
        <Rate numberOfLines={2}> {movie.vote_average}/10 </Rate>
      </ContainerArea>

      <ContainerArea>
        <ListGenres 
          data={movie?.genres}
          horizontal={ true }
          showsHorizontalScrollIndicator={ false }
          keyExtractor={ (item)=> String(item.id)}
          renderItem={ ({ item })=> <Genres data={ item }/> }
        />
      </ContainerArea>

      <ScrollView>
        <Title>Descricao</Title>
          <Description>
            { movie?.overview}
          </Description>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={ true }
        visible={ isVisibleOpenModal }
      >
        <ModalLink 
          link={movie?.homepage}
          title={movie?.title}
          closedModal={ ()=> setisVisibleOpenModal(false) }
        />
      </Modal>
     

    </Container>
  )
}