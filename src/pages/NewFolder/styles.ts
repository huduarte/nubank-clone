import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const Content = styled.View`
  background-color: #ffffff;
  align-items: center;
  flex: 1;
`;

export const Header = styled.View`
  padding: 5px 20px 0 5px;
  width: 100%;
  background-color: #9846be;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 8%;
`;
export const Icons = styled.TouchableOpacity`
  flex-direction: row;
`;
export const Title = styled.Text`
  font-size: 14px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

export const InputsContainer = styled.View`
  width: 100%;
  height: 83%;
  padding-top: 20px;
  padding-left: 20px;
`;
export const FolderNameText = styled.Text`
  font-size: 16px;
`;
export const FolderNameInput = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #000;
  width: 90%;
`;
export const FolderGoalText = styled.Text`
  margin-top: 30px;
  margin-bottom: 5px;
  font-size: 16px;
`;
export const FolderGoalInput = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #000;
  width: 90%;
`;
export const CreateFolderButton = styled.TouchableOpacity`
  width: 100%;
  flex: 1;
  background-color: #9846be;
  justify-content: center;
  align-items: center;
`;
export const CreateFolderText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;
