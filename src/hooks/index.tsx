import React from 'react';

import {MoneyProvider} from './money';

const AppProvider: React.FC = ({children}) => (
  <MoneyProvider>{children}</MoneyProvider>
);

export default AppProvider;
