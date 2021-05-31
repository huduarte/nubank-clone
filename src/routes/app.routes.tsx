import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import BillInfo from '../pages/BillInfo';
import SavedMoney from '../pages/SavedMoney';
import NewFolder from '../pages/NewFolder';
import SaveMoney from '../pages/SaveMoney';
import SaveMoneyConfirmation from '../pages/SaveMoneyConfirmation';
import FolderDescription from '../pages/FolderDescription';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#9846be'},
    }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="BillInfo" component={BillInfo} />
    <App.Screen name="SavedMoney" component={SavedMoney} />
    <App.Screen name="NewFolder" component={NewFolder} />
    <App.Screen name="SaveMoney" component={SaveMoney} />
    <App.Screen
      name="SaveMoneyConfirmation"
      component={SaveMoneyConfirmation}
    />
    <App.Screen name="FolderDescription" component={FolderDescription} />
  </App.Navigator>
);

export default AppRoutes;
