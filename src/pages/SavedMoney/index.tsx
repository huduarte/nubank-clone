import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Content,
  Header,
  Icons,
  SavedMoneyValue,
  Title,
  Folder,
  FolderCard,
  CardHeader,
  CardFooter,
  FolderTitle,
  FolderAmount,
  FolderGoal,
  FolderProgressiveBar,
  FolderProgressiveBarAdvance,
  Options,
  NewFolder,
  NewFolderText,
  SaveMoney,
  SaveMoneyText,
} from './styles';
import {Text, FlatList} from 'react-native';
import {useMoney} from '../../hooks/money';

interface FolderProps {
  id: string;
  title: string;
  amount: number;
  goal: number;
}
const SavedMoney = (): JSX.Element => {
  const {savedMoney} = useMoney();
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const {navigate} = useNavigation();
  function handlePressToBack() {
    navigate('BillInfo');
  }

  function handlePressCreateNewFolder() {
    navigate('NewFolder');
  }
  function handlePressSaveMoney() {
    navigate('SaveMoney');
  }

  async function getFolders() {
    const data = await AsyncStorage.getItem('@nuclone:folder');
    const folders = data ? JSON.parse(data) : [];
    if (folders) {
      setFolders(folders);
    }
  }

  function getPercentOfProgressiveBar(
    meta_total: number,
    meta_cumprida: number,
  ) {
    let width = 0;
    width = (meta_cumprida * 100) / meta_total;
    return width;
  }

  function handlePressFolderDescription(folder: FolderProps) {
    navigate('FolderDescription', {
      folder,
    });
  }

  useEffect(() => {
    getFolders();
  }, []);
  return (
    <Container>
      <Content>
        <Header>
          <Icons onPress={handlePressToBack}>
            <AntDesign name="left" color="#fff" size={25} />
          </Icons>
          <Title>{`DINHEIRO GUARDADO ${'\n'} TOTAL`}</Title>
          <AntDesign name="questioncircleo" color="#fff" size={25} />
        </Header>
        <SavedMoneyValue>R$ {savedMoney}</SavedMoneyValue>
        <Folder>
          {folders ? (
            <FlatList
              data={folders}
              renderItem={({item}) => (
                <FolderCard
                  onPress={() => {
                    handlePressFolderDescription(item);
                  }}
                  key={item.id}>
                  <CardHeader>
                    <FolderTitle>{item.title}</FolderTitle>
                    <FolderAmount>R$ {item.amount}</FolderAmount>
                  </CardHeader>
                  <CardFooter>
                    <FolderGoal>meta: R$ {item.goal}</FolderGoal>
                    <FolderProgressiveBar>
                      <FolderProgressiveBarAdvance
                        width={getPercentOfProgressiveBar(
                          item.goal,
                          item.amount,
                        )}
                      />
                    </FolderProgressiveBar>
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
        <Options>
          <NewFolder onPress={handlePressCreateNewFolder}>
            <MaterialCommunityIcons
              name="folder-multiple-plus"
              color="#9846be"
              size={30}
            />
            <NewFolderText>Criar nova pasta</NewFolderText>
          </NewFolder>
          <SaveMoney onPress={handlePressSaveMoney}>
            <MaterialCommunityIcons name="piggy-bank" color="#000" size={30} />
            <SaveMoneyText>Guardar dinheiro</SaveMoneyText>
          </SaveMoney>
        </Options>
      </Content>
    </Container>
  );
};
export default SavedMoney;
