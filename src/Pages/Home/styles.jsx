import styleds from 'styled-components/native';

export const ContainerIsloading  = styleds.View`
  background-color:#141A29;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styleds.SafeAreaView`
  background-color:#141A29;
  flex: 1;
  padding: 12px;
`;
export const Titulo = styleds.Text`
`;
export const SearchContainer = styleds.View`
  flex-direction: row;
  width: 100%;
  height:50px;
  align-items: center;
  padding: 0px 14px;
  margin-bottom: 8px;
`;
export const Input = styleds.TextInput`
  background-color: rgba(255, 255, 255, 0.4);
  width: 85%;
  height:50px;
  border-radius:50px;
  padding: 8px 15px;
  font-size: 18px;
  color: #FFF;
`;
export const SearchButton = styleds.TouchableOpacity`
  width: 15%;
  height:50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styleds.Text`
  padding-top: 20px;
  padding-bottom: 8px;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;
export const BannerButton = styleds.TouchableOpacity`

`;
export const Banner = styleds.Image`
  height: 150px;
  border-radius: 6px;
  margin: 0 14px;
 
`;

export const SliderMovie = styleds.FlatList`
  height: 250px;
  padding: 0px 14px;
`;