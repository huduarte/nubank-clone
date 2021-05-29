import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  padding: 25px 20px 0 5px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const Icons = styled.TouchableOpacity`
  flex-direction: row;
`;
export const EarningsBox = styled.View`
  border: 1px;
  width: 30%;
  justify-content: center;
  align-items: center;
  border-color: green;
`;
export const EarningsText = styled.Text`
  color: green;
  font-size: 14px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
`;
export const Balance = styled.View`
  margin-top: 60px;
  padding-left: 40px;
  margin-bottom: 80px;
`;
export const BalanceText = styled.Text`
  font-size: 18px;
  color: #9e9e9e;
`;
export const BalanceValue = styled.Text`
  margin-top: 15px;
  font-size: 32px;
  font-weight: bold;
`;
export const BalanceButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 40px;
  padding: 0 40px 0 40px;
  align-items: center;
`;

export const BalanceButtonView = styled.View``;
export const BalanceButtonText = styled.Text`
  margin-left: 15px;
  font-size: 16px;
`;
export const BalanceButtonValue = styled.Text`
  margin-left: 15px;
  font-size: 16px;
`;

export const BalanceOptions = styled.View`
  flex-direction: row;
  margin-top: 60px;
`;

export const SmallerCards = styled.TouchableOpacity`
  background-color: #ffffff;
  width: 25%;
  height: 80px;
  padding-left: 5px;
  justify-content: space-evenly;
  border: 1px;
  border-color: #9e9e9e;
`;
export const SmallerCardsText = styled.Text`
  color: #000;
  font-size: 12px;
`;
export const BalanceHistory = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px 0 20px;
`;
export const HistoryInfo = styled.View`
  margin-left: 15px;
`;
export const HistoryTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;
export const HistoryName = styled.Text`
  font-size: 16px;
`;
export const HistoryValue = styled.Text`
  font-size: 16px;
`;
export const HistoryDate = styled.Text`
  font-size: 12px;
  color: #9e9e9e;
  position: absolute;
  right: 30px;
`;
