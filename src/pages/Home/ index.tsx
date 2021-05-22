import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CoinIcon from 'react-native-vector-icons/FontAwesome5';
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

export function Home() {
  return (
    <Container>
      <Header>
        <Gretting>Olá, Hudson!</Gretting>
        <Config>
          <EyeButton>
            <Icon name="remove-red-eye" color="#FFF" size={20} />
          </EyeButton>
          <SettingsButton>
            <Icon name="settings" color="#FFF" size={20} />
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
              <Icon name="credit-card" color="#000" size={30} />
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
              <CoinIcon name="coins" color="#000" size={30} />
              <CardHeaderText>Conta</CardHeaderText>
            </CardHeader>
            <InvoiceText>Saldo disponível</InvoiceText>
            <InvoiceValue>R$ 3.200,00</InvoiceValue>
          </Card>

          <Card activeOpacity={0.9}>
            <CardHeader>
              <Icon name="clean-hands" color="#000" size={30} />
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
            <Icon name="credit-card" color="#fff" size={30} />
            <SmallerCardsText>Trasferir</SmallerCardsText>
          </SmallerCards>
          <SmallerCards>
            <Icon name="credit-card" color="#fff" size={30} />
            <SmallerCardsText>Dinheiro guardado</SmallerCardsText>
          </SmallerCards>
          <SmallerCards>
            <Icon name="credit-card" color="#fff" size={30} />
            <SmallerCardsText>Ajustar limite</SmallerCardsText>
          </SmallerCards>
          <SmallerCards>
            <Icon name="credit-card" color="#fff" size={30} />
            <SmallerCardsText>Bloquear</SmallerCardsText>
          </SmallerCards>
          <SmallerCards>
            <Icon name="credit-card" color="#fff" size={30} />
            <SmallerCardsText>Indicar amigos</SmallerCardsText>
          </SmallerCards>
        </ScrollView>
      </Footer>
    </Container>
  );
}
