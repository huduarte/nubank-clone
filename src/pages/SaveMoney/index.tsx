import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Content,
  Header,
  Icons,
  Title,
  SaveMoneyAmount,
  SaveMoneyInput,
  SavedMoney,
  ChooseFolder,
  Folder,
  FolderCard,
  CardHeader,
  CardFooter,
  FolderTitle,
  FolderAmount,
  FolderGoal,
} from './styles';
import {Text, FlatList, Alert, ScrollView} from 'react-native';
import {useMoney} from '../../hooks/money';

interface FolderProps {
  id: string;
  title: string;
  amount: number;
  goal: number;
}
const SaveMoney = (): JSX.Element => {
  const {money, handleSaveMoney} = useMoney();
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const [amount, setAmount] = useState(0);
  const {goBack, navigate} = useNavigation();
  function handlePressToBack() {
    goBack();
  }

  async function getFolders() {
    const data = await AsyncStorage.getItem('@nuclone:folder');
    const folders = data ? JSON.parse(data) : [];
    if (folders) {
      setFolders(folders);
    }
  }

  async function handleChooseFolder(
    folderId: string,
    folderName: string,
    folderGoal: number,
    folderAmount: number,
  ) {
    if (amount > money) {
      Alert.alert(
        'Erro ao guardar o seu dinheiro!',
        'Você não possuí a quantidade de dinheiro solicitada.',
      );
      return;
    }
    if (amount > folderGoal - folderAmount) {
      Alert.alert(
        'Erro ao guardar o seu dinheiro!',
        'O valor desejado ultrapassa o valor de meta da pasta.',
      );
      return;
    }
    if (amount > folderGoal) {
      Alert.alert(
        'Erro ao guardar o seu dinheir',
        'A quantidade solicitada é maior que a meta da sua pasta.',
      );
      return;
    }
    if (amount === 0) {
      return;
    } else {
      const data = await AsyncStorage.getItem('@nuclone:folder');
      if (data?.length !== 0) {
        const foldersArr = data ? JSON.parse(data) : [];
        const addMoneyToFolder = foldersArr.map(folder => {
          if (folder.id === folderId) {
            return {
              ...folder,
              amount: folder.amount + amount,
            };
          } else {
            return folder;
          }
        });

        handleSaveMoney(amount);
        await AsyncStorage.setItem(
          '@nuclone:folder',
          JSON.stringify(addMoneyToFolder),
        );
      }
    }
    navigate('SaveMoneyConfirmation', {
      amount: amount,
      title: folderName,
    });
  }

  useEffect(() => {
    getFolders();
  }, []);
  return (
    <Container>
      <ScrollView>
        <Content>
          <Header>
            <Icons onPress={handlePressToBack}>
              <AntDesign name="left" color="#fff" size={25} />
            </Icons>
            <Title>Valor a guardar:</Title>
            <AntDesign name="questioncircleo" color="#fff" size={25} />
          </Header>
          <SaveMoneyAmount>
            <SaveMoneyInput
              keyboardType="numeric"
              onChangeText={text => {
                setAmount(Number(text));
              }}
            />
            <SavedMoney>Saldo conta corrente: {money}</SavedMoney>
            <ChooseFolder>Enviar para:</ChooseFolder>
          </SaveMoneyAmount>
          <Folder>
            {folders ? (
              <FlatList
                data={folders}
                renderItem={({item}) => (
                  <FolderCard
                    key={item.id}
                    onPress={() =>
                      handleChooseFolder(
                        item.id,
                        item.title,
                        item.goal,
                        item.amount,
                      )
                    }>
                    <CardHeader>
                      <FolderTitle>{item.title}</FolderTitle>
                      <FolderAmount>R$ {item.amount}</FolderAmount>
                    </CardHeader>
                    <CardFooter>
                      <FolderGoal>meta: R$ {item.goal}</FolderGoal>

                      <AntDesign name="right" color="#000" size={25} />
                    </CardFooter>
                  </FolderCard>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flex: 1}}
              />
            ) : (
              <Text>Ainda não existem pastas cadastradas</Text>
            )}
          </Folder>
        </Content>
      </ScrollView>
    </Container>
  );
};
export default SaveMoney;
