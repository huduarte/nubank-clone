import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #8f31bb;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 15%;
`;
export const Gretting = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
`;
export const Config = styled.View`
  flex-direction: row;
`;
export const EyeButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #9846be;
  justify-content: center;
  align-items: center;
`;
export const SettingsButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #9846be;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
export const Content = styled.View`
  height: 65%;
  flex: 1;
  align-items: center;
`;

export const CardsView = styled.ScrollView`
  width: 100%;
`;
export const Card = styled.TouchableOpacity`
  margin-top: 20px;
  width: 90%;
  padding-left: 20px;
  padding-bottom: 20px;
  background-color: #ffffff;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
export const CardHeaderText = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  color: #9e9e9e;
`;

export const InvoiceText = styled.Text`
  color: #9e9e9e;
  margin-top: 8px;
  font-size: 12px;
`;
export const InvoiceValue = styled.Text`
  color: #4a9aa5;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 28px;
  font-weight: bold;
`;

export const CreditLimitText = styled.Text`
  color: #000;
  font-size: 14px;
`;

export const CreditLimitValue = styled.Text`
  color: #91bb97;
  font-weight: bold;
`;

export const Footer = styled.View`
  height: 20%;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SmallerCards = styled.TouchableOpacity`
  background-color: #9846be;
  width: 80px;
  margin-right: 10px;
  height: 80px;
  padding-left: 5px;
  justify-content: space-evenly;
`;
export const SmallerCardsText = styled.Text`
  color: #fff;
`;
