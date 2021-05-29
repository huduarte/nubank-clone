import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  Options,
  NewFolder,
  NewFolderText,
  SaveMoney,
  SaveMoneyText,
} from './styles';
import {Text, FlatList} from 'react-native';

interface FolderProps {
  id: number;
  title: string;
  amount: number;
  goal: number;
}
const SavedMoney = (): JSX.Element => {
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const {goBack} = useNavigation();
  function handlePressToBack() {
    goBack();
  }

  useEffect(() => {
    let id = 1;
    const newGoal = {
      id: id,
      title: 'Disney',
      amount: 500,
      goal: 5000,
    };
    id++;

    setFolders(oldState => [...oldState, newGoal]);
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
        <SavedMoneyValue>R$ 1.000,00</SavedMoneyValue>
        <Folder>
          {folders ? (
            <FlatList
              data={folders}
              renderItem={({item}) => (
                <FolderCard key={item.id}>
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
        <Options>
          <NewFolder>
            <MaterialCommunityIcons
              name="folder-multiple-plus"
              color="#9846be"
              size={30}
            />
            <NewFolderText>Criar nova pasta</NewFolderText>
          </NewFolder>
          <SaveMoney>
            <MaterialCommunityIcons name="piggy-bank" color="#000" size={30} />
            <SaveMoneyText>Guardar dinheiro</SaveMoneyText>
          </SaveMoney>
        </Options>
      </Content>
    </Container>
  );
};
export default SavedMoney;
