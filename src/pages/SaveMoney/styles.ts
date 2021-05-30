import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.View`
  background-color: #fff;
  align-items: center;
  flex: 1;
`;

export const Header = styled.View`
  padding: 25px 20px 0 5px;
  width: 100%;
  background-color: #9846be;
  justify-content: space-between;
  flex-direction: row;
`;
export const Title = styled.Text`
  font-size: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

export const Icons = styled.TouchableOpacity`
  flex-direction: row;
`;

export const SaveMoneyAmount = styled.View`
  background-color: #9846be;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SaveMoneyInput = styled.TextInput`
  color: #ffffff;
  width: 70%;
  border-bottom-width: 1px;
  border-color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;
export const SavedMoney = styled.Text`
  margin-top: 10px;
  color: #ffffff;
`;

export const SavedMoneyValue = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

export const ChooseFolder = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 150px;
  margin-bottom: 20px;
`;

export const Folder = styled.View`
  flex: 1;
  background-color: #fff;
  width: 100%;
`;

export const FolderCard = styled.TouchableOpacity`
  padding: 15px;
  height: 120px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px;
  border-color: #9e9e9e;
`;

export const CardHeader = styled.View`
  width: 100%;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
`;
export const CardFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const FolderTitle = styled.Text`
  font-size: 18px;
`;
export const FolderAmount = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;
export const FolderGoal = styled.Text`
  color: #9e9e9e;
`;

export const Options = styled.View`
  width: 100%;
  height: 15%;
  border-color: #9e9e9e;
  flex-direction: row;
  background-color: #fff;
`;
export const NewFolder = styled.TouchableOpacity`
  width: 50%;
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
