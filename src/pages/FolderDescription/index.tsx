import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import FolderIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Content,
  Header,
  FolderTexts,
  FolderTitle,
  FolderAmount,
  FolderGoal,
  FolderProgressiveBar,
  FolderProgressiveBarAdvance,
  Options,
  NewFolder,
  NewFolderText,
} from './styles';
import {useMoney} from '../../hooks/money';
import {Alert} from 'react-native';

interface FolderProps {
  id: string;
  title: string;
  amount: number;
  goal: number;
}

interface RouteParams {
  folder: FolderProps;
}

const FolderDescription = (): JSX.Element => {
  const {navigate, reset} = useNavigation();
  const {params} = useRoute();
  const routeParams = params as RouteParams;
  function handleConfirmIcon() {
    navigate('BillInfo');
  }

  const {handleRecoveryMoney} = useMoney();

  function getPercentOfProgressiveBar(
    meta_total: number,
    meta_cumprida: number,
  ) {
    let width = 0;
    width = (meta_cumprida * 100) / meta_total;
    return width;
  }

  async function handlePressRecoveryMoney() {
    if (routeParams.folder.amount === 0) {
      Alert.alert(
        'Erro ao regastar dinheiro',
        'Você ainda não possui dinheiro guardado nessa pasta.',
      );
      return navigate('SavedMoney');
    }
    await handleRecoveryMoney(routeParams.folder.amount, routeParams.folder.id);
    reset({
      index: 0,
      routes: [
        {
          name: 'SavedMoney',
        },
      ],
    });
  }

  return (
    <Container>
      <Content>
        <Header>
          <FolderIcon
            name="close"
            size={20}
            style={{marginLeft: 20}}
            color="#fff"
            onPress={handleConfirmIcon}
          />
          <FolderTexts>
            <FolderTitle>{routeParams.folder.title}</FolderTitle>
            <FolderAmount>R$ {routeParams.folder.amount}</FolderAmount>
            <FolderGoal>meta: R${routeParams.folder.goal}</FolderGoal>
            <FolderProgressiveBar>
              <FolderProgressiveBarAdvance
                width={getPercentOfProgressiveBar(
                  routeParams.folder.goal,
                  routeParams.folder.amount,
                )}
              />
            </FolderProgressiveBar>
          </FolderTexts>
        </Header>
        <Options>
          <NewFolder onPress={handlePressRecoveryMoney}>
            <FontAwesomeIcons name="money-bill" color="#9846be" size={25} />
            <NewFolderText>Resgatar dinheiro</NewFolderText>
          </NewFolder>
        </Options>
      </Content>
    </Container>
  );
};
export default FolderDescription;
