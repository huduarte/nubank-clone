import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Container,
  Header,
  Icons,
  Title,
  Content,
  FolderNameText,
  FolderNameInput,
  FolderGoalText,
  FolderGoalInput,
  InputsContainer,
  CreateFolderButton,
  CreateFolderText,
} from './styles';

interface FolderProps {
  id: string;
  title: string;
  amount: number;
  goal: number;
}

const NewFolder = (): JSX.Element => {
  const {navigate} = useNavigation();
  const [folderName, setFolderName] = useState('');
  const [folderGoal, setFolderGoal] = useState(0);

  function handlePressToBack() {
    navigate('BillInfo');
  }

  async function handleCreateNewFolder() {
    const data = await AsyncStorage.getItem('@nuclone:folder');
    const folders = data ? JSON.parse(data) : [];
    if (folders?.length !== 0) {
      const newGoal = {
        id: String(new Date().getTime()),
        title: folderName,
        amount: 0,
        goal: folderGoal,
      };

      const oldFolders = JSON.parse(data);
      oldFolders.forEach(e => e.id !== newGoal.id && oldFolders.push(newGoal));

      await AsyncStorage.setItem('@nuclone:folder', JSON.stringify(oldFolders));
    } else {
      const newGoal = {
        id: String(new Date().getTime()),
        title: folderName,
        amount: 0,
        goal: folderGoal,
      };
      const goalsArray = [newGoal];

      await AsyncStorage.setItem('@nuclone:folder', JSON.stringify(goalsArray));
    }

    navigate('BillInfo');
  }

  return (
    <Container>
      <Content>
        <Header>
          <Icons onPress={handlePressToBack}>
            <AntDesign name="left" color="#fff" size={25} />
          </Icons>
          <Title>CONFIGURAÇÕES DE PASTA</Title>
          <AntDesign name="questioncircleo" color="#fff" size={25} />
        </Header>
        <InputsContainer>
          <FolderNameText>Nome da pasta:</FolderNameText>
          <FolderNameInput onChangeText={setFolderName} />
          <FolderGoalText>Sua meta é de:</FolderGoalText>
          <FolderGoalInput
            keyboardType="numeric"
            onChangeText={text => {
              setFolderGoal(Number(text));
            }}
          />
        </InputsContainer>
        <CreateFolderButton onPress={handleCreateNewFolder}>
          <CreateFolderText>Criar pasta</CreateFolderText>
        </CreateFolderButton>
      </Content>
    </Container>
  );
};
export default NewFolder;
