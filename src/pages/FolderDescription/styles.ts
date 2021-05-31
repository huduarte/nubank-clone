import styled from 'styled-components/native';

interface ProgressiveBar {
  width: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const Content = styled.View`
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Header = styled.View`
  padding-top: 10px;
  background-color: #9846be;
  width: 100%;
  height: 50%;
`;

export const FolderTexts = styled.View`
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex: 1;
`;
export const FolderTitle = styled.Text`
  font-size: 48px;
  color: #ffffff;
  font-weight: bold;
`;
export const FolderAmount = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
`;

export const FolderGoal = styled.Text`
  color: #ffffff;
`;
export const FolderProgressiveBar = styled.View`
  position: relative;
  border: 3px;
  border-color: #ffffff;
  background-color: transparent;
  width: 120px;
  height: 20px;
`;
export const FolderProgressiveBarAdvance = styled.View<ProgressiveBar>`
  height: 100%;
  background-color: #ffffff;
  width: ${({width}) => `${width}%`};
`;

export const Options = styled.View`
  width: 100%;
  border-color: #9e9e9e;
  flex-direction: row;
  background-color: #fff;
`;
export const NewFolder = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  border: 1px;
  border-color: #9e9e9e;
  justify-content: center;
  align-items: center;
`;
export const NewFolderText = styled.Text``;
export const SaveMoney = styled.TouchableOpacity`
  border: 1px;
  border-color: #9e9e9e;
  width: 50%;
  justify-content: center;
  align-items: center;
`;
export const SaveMoneyText = styled.Text``;
