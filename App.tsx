import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView} from 'react-native-safe-area-context';

import Routes from './src/routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#9846be" translucent />
    <SafeAreaView style={{flex: 1, backgroundColor: '#9846be'}}>
      <Routes />
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
