import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ConfirmIcon from 'react-native-vector-icons/AntDesign';

import {
  Container,
  Content,
  Header,
  ConfirmText,
  ConfirmDescriptionText,
  ConfirmationTexts,
  AmountText,
  AmountPath,
  AmountName,
} from './styles';

interface RouteParams {
  amount: number;
  title: string;
}

const SaveMoneyConfirmation = (): JSX.Element => {
  const {navigate} = useNavigation();
  const {params} = useRoute();
  const routeParams = params as RouteParams;
  function handleConfirmIcon() {
    navigate('BillInfo');
  }

  return (
    <Container>
      <Content>
        <Header>
          <ConfirmIcon
            name="close"
            size={20}
            style={{marginLeft: 20}}
            color="#fff"
            onPress={handleConfirmIcon}
          />
          <ConfirmationTexts>
            <ConfirmText>Dinheiro guardado!</ConfirmText>
            <ConfirmDescriptionText>
              Você está cada vez mais próximo de atingir sua meta!
            </ConfirmDescriptionText>
          </ConfirmationTexts>
        </Header>

        <AmountText>R$ {routeParams.amount}</AmountText>
        <AmountPath>
          {`Enviado para ${'\n'}`}
          <AmountName>{routeParams.title}</AmountName>
        </AmountPath>
      </Content>
    </Container>
  );
};
export default SaveMoneyConfirmation;
