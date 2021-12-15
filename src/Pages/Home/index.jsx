import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import {
  Container,
  ContainerIsloading,
  SearchContainer,
  Input,
  SearchButton,
  BannerButton,
  Banner,
  Title,
  SliderMovie,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { Header } from '../../Components/Header';
import { SliderItem } from '../../Components/SliderItem';
import { api, key_api } from '../../Services/api';
import { getListMovies, handleBanner } from '../../Utils/movies';
import { useNavigation } from '@react-navigation/native';
export function Home(){
  const navigation = useNavigation();
  const [nowMovies, setNowMovies] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topData, settopData] = useState([]);
  const [ isloading, setIsLoading] =useState(true);
  const [ bannerMovie, setBannerMovie] = useState({});

  const [ searchInput, setSearchInput ] = useState("");

  //buscar todos filmes quando componente for montado
  useEffect( ()=> {
    let isActive = true;
    const ac = new AbortController();// monitora as funcao assicronas

    async function getMovies(){
      const [nowDataCartaz, popularData, topData ] = await Promise.all([
        api.get('/movie/now_playing',{
          params:{
            api_key: key_api,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/popular',{
          params:{
            api_key: key_api,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/top_rated',{
          params:{
            api_key: key_api,
            language: 'pt-BR',
            page: 1,
          }
        }),

      ]);
     //requisicao so aconteca na tela home se for pra outra tela eu desmonto component
     if(isActive){
      const nowListMovies = getListMovies(10, nowDataCartaz.data.results);
      const popularListMovies = getListMovies(5, popularData.data.results);
      const topDataListMovies = getListMovies(5, topData.data.results);

      //gerar nosso banner
      setBannerMovie( nowDataCartaz.data.results[handleBanner(nowDataCartaz.data.results)]);
      setNowMovies(nowListMovies);
      setPopularData(popularListMovies);
      settopData(topDataListMovies);
      setIsLoading(false);
     }
      
    };
    //executar funçao
    getMovies();

    //temos no useEfecth uma função anonima e ela so e chamada quando o componente e desmontado
    return () => {
      isActive = false;
      ac.abort();// abortar nossas funcao assicronas tabem 
    };
  }, []);

//navegaçao detalhes passando dados dos filmes
function handleNavigationDetails(item){
  navigation.navigate("Detalhes", { id: item.id})
}

//pegando dados que usuário digitar no input

//função que irá fazer a buscar
function handleSearchMovie(){
  //verificando se usuário digitou alguma coisa
  if(searchInput === ""){
    alert("Prencha alguma nome para prosseguir!");
    return;
  }
  navigation.navigate("Search", { name: searchInput});
  setSearchInput('');
  console.log(searchInput)
}

  if(isloading){
   return(
    <ContainerIsloading>
      <ActivityIndicator 
        size="large"
        color="#FFF"
      />
    </ContainerIsloading>
   )
  }
  return(
    <Container>
      <Header title="Cine-Prime"/>

      <SearchContainer>
        <Input 
          placeholder="Ex Vigandores"
          placeholderTextColor="#dedede"
          value={searchInput}
          onChangeText={(text)=>setSearchInput(text) }
        />

        <SearchButton onPress={ ()=> handleSearchMovie()}>
          <Feather 
            name="search"
            size={ 30 }
            color="#FFF"
          />
        </SearchButton>
      </SearchContainer>
    <ScrollView showsVerticalScrollIndicator={ false }>
      <Title> Em Cataz</Title>

        <BannerButton 
          acitveOpacity={ 0.9 }
          onPress={ ()=> handleNavigationDetails(bannerMovie)}
        >
          <Banner 
            resizeMethod="resize"
            source={ { uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`}}
          />
        </BannerButton>

        <SliderMovie 
          horizontal={true}
          showsHorizontalScrollIndicator={ false }
          data={ nowMovies }
          keyExtarctor={ (item) => String(item.id) }
          renderItem={ ({ item })=> (
            <SliderItem 
              data={ item }
              navigatePage={ ()=> handleNavigationDetails(item)}
            />
          )}
          
        />
        <Title>Populares</Title>

        <SliderMovie 
          horizontal={true}
          showsHorizontalScrollIndicator={ false }
          data={ popularData }
          keyExtarctor={ (item) => String(item.id) }
          renderItem={ ({ item })=> (
            <SliderItem 
              data={ item }
              navigatePage={ ()=> handleNavigationDetails(item)}
            />
          )}
        
        />

        <Title>Mais votados</Title>

        <SliderMovie 
          horizontal={true}
          showsHorizontalScrollIndicator={ false }
          data={ topData }
          keyExtarctor={ (item) => String(item.id) }
          renderItem={ ({ item })=> (
            <SliderItem 
              data={ item }
              navigatePage={ ()=> handleNavigationDetails(item)}
            />
          )}
          
        />
    </ScrollView>
    </Container>
  )
}