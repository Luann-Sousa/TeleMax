import styleds from 'styled-components/native';

export const Container = styleds.TouchableOpacity`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 14px;
  width: 140px;
  height: 180px;
`;
export const BannerItem = styleds.Image`
  width: 100%;
  height: 170px;
  border-radius: 8px;
`;
export const Title = styleds.Text`
  font-size: 14px;
  color: #FFF;
  padding-top: 10px; 
`;
export const RateContainer = styleds.View`
  flex-direction: row;
  align-items: center;
`;
export const Rate = styleds.Text`
  padding-left: 4px;
  font-size: 12px;
  color: #FFF;
`;