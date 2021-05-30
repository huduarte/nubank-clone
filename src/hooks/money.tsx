import React, {createContext, useContext, useState} from 'react';

interface MoneyData {
  money: number;
  savedMoney: number;
  handleSaveMoney: (amount: number) => void;
}

const MoneyContext = createContext<MoneyData>({} as MoneyData);

const MoneyProvider: React.FC = ({children}) => {
  const [money, setMoney] = useState(5000);
  const [savedMoney, setSavedMoney] = useState(0);

  function handleSaveMoney(amount: number) {
    setMoney(oldMoney => oldMoney - amount);
    setSavedMoney(oldSavedMoney => oldSavedMoney + amount);
  }

  return (
    <MoneyContext.Provider value={{money, savedMoney, handleSaveMoney}}>
      {children}
    </MoneyContext.Provider>
  );
};

function useMoney(): MoneyData {
  const context = useContext(MoneyContext);

  if (!context) {
    throw new Error('useMoney must be used within an MoneyProvider');
  }

  return context;
}

export {MoneyProvider, useMoney};
