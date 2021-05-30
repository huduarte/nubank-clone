import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useMoney} from '../../hooks/money';
import {
  Container,
  Header,
  Icons,
  EarningsBox,
  EarningsText,
  Content,
  Balance,
  BalanceText,
  BalanceValue,
  BalanceButton,
  BalanceButtonView,
  BalanceButtonText,
  BalanceButtonValue,
  BalanceOptions,
  SmallerCards,
  SmallerCardsText,
  BalanceHistory,
  HistoryInfo,
  HistoryTitle,
  HistoryName,
  HistoryValue,
  HistoryDate,
} from './styles';

const BillInfo = (): JSX.Element => {
  const {money, savedMoney} = useMoney();
  const {goBack, navigate} = useNavigation();
  function handlePressToBack() {
    goBack();
  }
  function handlePressSavedMoney() {
    navigate('SavedMoney');
  }

  return (
    <Container>
      <ScrollView>
        <Header>
          <Icons onPress={handlePressToBack}>
            <AntDesign name="left" color="#000" size={25} />
            <FontAwesomeIcons
              style={{paddingLeft: 10}}
              name="coins"
              color="#000"
              size={25}
            />
          </Icons>
          <EarningsBox>
            <EarningsText>+R$ 0,10</EarningsText>
          </EarningsBox>
          <AntDesign name="questioncircleo" color="#000" size={25} />
        </Header>
        <Content>
          <Balance>
            <BalanceText>Saldo disponível</BalanceText>
            <BalanceValue>R$ {money}</BalanceValue>
          </Balance>
          <BalanceButton onPress={handlePressSavedMoney}>
            <MaterialCommunityIcons name="piggy-bank" color="#000" size={30} />
            <BalanceButtonView>
              <BalanceButtonText>Guardar dinheiro</BalanceButtonText>
              <BalanceButtonValue>R$ {savedMoney}</BalanceButtonValue>
            </BalanceButtonView>
            <AntDesign
              name="right"
              color="#000"
              size={15}
              style={{position: 'absolute', right: 30}}
            />
          </BalanceButton>
          <BalanceButton>
            <MaterialIcons name="clean-hands" color="#000" size={30} />
            <BalanceButtonView>
              <BalanceButtonText>{`Valor disponível para ${'\n'} emprestimo de R$ 15.100,00`}</BalanceButtonText>
            </BalanceButtonView>
            <AntDesign
              name="right"
              color="#000"
              size={15}
              style={{position: 'absolute', right: 30}}
            />
          </BalanceButton>
          <BalanceOptions>
            <SmallerCards>
              <FontAwesomeIcons name="money-bill" color="#9846be" size={25} />
              <SmallerCardsText>Depositar</SmallerCardsText>
            </SmallerCards>
            <SmallerCards>
              <FontAwesomeIcons name="coins" color="#9846be" size={25} />
              <SmallerCardsText>Pagar</SmallerCardsText>
            </SmallerCards>
            <SmallerCards>
              <MaterialCommunityIcons
                name="bank-transfer"
                color="#9846be"
                size={30}
              />
              <SmallerCardsText>Trasferir</SmallerCardsText>
            </SmallerCards>
            <SmallerCards>
              <MaterialIcons name="clean-hands" color="#9846be" size={25} />
              <SmallerCardsText>Empréstimos</SmallerCardsText>
            </SmallerCards>
          </BalanceOptions>
          <BalanceHistory>
            <FontAwesomeIcons name="money-bill" color="#9846be" size={25} />
            <HistoryInfo>
              <HistoryTitle>Transferência Recebida</HistoryTitle>
              <HistoryName>Hudson Duarte</HistoryName>
              <HistoryValue>R$ 200,00</HistoryValue>
            </HistoryInfo>

            <HistoryDate>Hoje</HistoryDate>
          </BalanceHistory>
          <BalanceHistory>
            <FontAwesomeIcons name="money-bill" color="#9846be" size={25} />
            <HistoryInfo>
              <HistoryTitle>Transferência Recebida</HistoryTitle>
              <HistoryName>Maria Clara</HistoryName>
              <HistoryValue>R$ 200,00</HistoryValue>
            </HistoryInfo>

            <HistoryDate>Hoje</HistoryDate>
          </BalanceHistory>

          <BalanceHistory>
            <FontAwesomeIcons name="money-bill" color="#9846be" size={25} />
            <HistoryInfo>
              <HistoryTitle>Transferência Recebida</HistoryTitle>
              <HistoryName>Maria Clara</HistoryName>
              <HistoryValue>R$ 200,00</HistoryValue>
            </HistoryInfo>

            <HistoryDate>Hoje</HistoryDate>
          </BalanceHistory>
          <BalanceHistory>
            <FontAwesomeIcons name="money-bill" color="#9846be" size={25} />
            <HistoryInfo>
              <HistoryTitle>Transferência Recebida</HistoryTitle>
              <HistoryName>Maria Clara</HistoryName>
              <HistoryValue>R$ 200,00</HistoryValue>
            </HistoryInfo>

            <HistoryDate>Hoje</HistoryDate>
          </BalanceHistory>
          <BalanceHistory>
            <FontAwesomeIcons name="money-bill" color="#9846be" size={25} />
            <HistoryInfo>
              <HistoryTitle>Transferência Recebida</HistoryTitle>
              <HistoryName>Maria Clara</HistoryName>
              <HistoryValue>R$ 200,00</HistoryValue>
            </HistoryInfo>

            <HistoryDate>Hoje</HistoryDate>
          </BalanceHistory>
        </Content>
      </ScrollView>
    </Container>
  );
};
export default BillInfo;
