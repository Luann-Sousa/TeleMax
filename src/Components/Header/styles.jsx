import styleds from 'styled-components/native';

export const Container = styleds.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  paddingLeft: 14px;
`;
export const MenuButton = styleds.TouchableOpacity`
  height: 70px;
  flex-direction: row;
  align-items: center;
  color: #FFF;
`;
export const Titule = styleds.Text`
  color:#FFF;
  font-size: 32px;
  font-weight: bold;
  margin-left: 10px;

`;