import styleds from 'styled-components/native';

export const Container = styleds.View`
  flex: 1;
  background-color:#141A29;
`;
export const Header = styleds.View`
  z-index: 99;
  position: absolute;
  top: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 14px;
`;

export const HeaderButton = styleds.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(25, 26, 48, 0.8);
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;

export const BannerBackgroud = styleds.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`;
export const ButtonLink = styleds.TouchableOpacity`
  width: 64px;
  height: 64px;
  background-color: #E72F49;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 300px;
  right: 15px;
  z-index: 99;
`;
export const Title = styleds.Text`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 8px;
`;
export const ContainerArea = styleds.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 14px;
`;
export const Rate = styleds.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 8px;
`;
export const ListGenres = styleds.FlatList`
`;
export const Description = styleds.Text`
  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 20px;
  color: #FFF;
  line-height: 20px;

`;