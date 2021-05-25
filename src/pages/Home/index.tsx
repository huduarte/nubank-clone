import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Gretting,
  Config,
  EyeButton,
  SettingsButton,
  Content,
  Card,
  CardHeader,
  CardHeaderText,
  InvoiceText,
  InvoiceValue,
  CreditLimitText,
  CreditLimitValue,
  Footer,
  SmallerCards,
  SmallerCardsText,
} from './styles';
import {ScrollView} from 'react-native';

const Home = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <Gretting>Olá, Hudson!</Gretting>
        <Config>
          <EyeButton>
            <MaterialIcons name="remove-red-eye" color="#FFF" size={20} />
          </EyeButton>
          <SettingsButton>
            <MaterialIcons name="settings" color="#FFF" size={20} />
          </SettingsButton>
        </Config>
      </Header>
      <Content>
        <ScrollView
          style={{width: '100%'}}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}>
          <Card activeOpacity={0.9}>
            <CardHeader>
              <MaterialIcons name="credit-card" color="#000" size={30} />
              <CardHeaderText>Cartão de credito</CardHeaderText>
            </CardHeader>
            <InvoiceText>Fatura atual</InvoiceText>
            <InvoiceValue>R$ 105,00</InvoiceValue>
            <CreditLimitText>
              Limite disponível <CreditLimitValue>R$ 4.590,00</CreditLimitValue>
            </CreditLimitText>
          </Card>

          <Card activeOpacity={0.9}>
            <CardHeader>
              <FontAwesomeIcons name="coins" color="#000" size={30} />
              <CardHeaderText>Conta</CardHeaderText>
            </CardHeader>
            <InvoiceText>Saldo disponível</InvoiceText>
            <InvoiceValue>R$ 3.200,00</InvoiceValue>
          </Card>

          <Card activeOpacity={0.9}>
            <CardHeader>
              <MaterialIcons name="clean-hands" color="#000" size={30} />
              <CardHeaderText>Empréstimo</CardHeaderText>
            </CardHeader>
            <InvoiceText>Valor disponível de até</InvoiceText>
            <InvoiceValue>R$ 15.100,00</InvoiceValue>
          </Card>
        </ScrollView>
      </Content>
      <Footer>
        <ScrollView
          style={{marginTop: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal>
          <SmallerCards>
            <MaterialIcons name="credit-card" color="#fff" size={30} />
            <SmallerCardsText>Trasferir</SmallerCardsText>
          </SmallerCards>
          <SmallerCards>
            <MaterialCommunityIcons name="piggy-bank" color="#fff" size={30} />
            <SmallerCardsText>Dinheiro guardado</SmallerCardsText>
          </SmallerCards>
          <SmallerCards>
            <MaterialIcons name="credit-card" color="#fff" size={30} />
            <SmallerCardsText>Ajustar limite</SmallerCardsText>
          </SmallerCards>
          <SmallerCards>
            <MaterialIcons name="block" color="#fff" size={30} />
            <SmallerCardsText>Bloquear</SmallerCardsText>
          </SmallerCards>
          <SmallerCards>
            <MaterialIcons
              name="supervised-user-circle"
              color="#fff"
              size={30}
            />
            <SmallerCardsText>Indicar amigos</SmallerCardsText>
          </SmallerCards>
        </ScrollView>
      </Footer>
    </Container>
  );
};
export default Home;
