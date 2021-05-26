import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import BillInfo from '../pages/BillInfo';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#9846be'},
    }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="BillInfo" component={BillInfo} />
  </App.Navigator>
);

export default AppRoutes;
