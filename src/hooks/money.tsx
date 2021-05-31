import React, {createContext, useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MoneyData {
  money: number;
  savedMoney: number;
  handleSaveMoney: (amount: number) => void;
  handleRecoveryMoney: (amount: number, id: string) => void;
}

const MoneyContext = createContext<MoneyData>({} as MoneyData);

const MoneyProvider: React.FC = ({children}) => {
  const [money, setMoney] = useState(5000);
  const [savedMoney, setSavedMoney] = useState(0);

  function handleSaveMoney(amount: number) {
    setMoney(oldMoney => oldMoney - amount);
    setSavedMoney(oldSavedMoney => oldSavedMoney + amount);
  }

  async function handleRecoveryMoney(amount: number, folderId: string) {
    setMoney(oldMoney => oldMoney + amount);
    setSavedMoney(oldSavedMoney => oldSavedMoney - amount);
    const data = await AsyncStorage.getItem('@nuclone:folder');
    if (data?.length !== 0) {
      const foldersArr = data ? JSON.parse(data) : [];
      const addMoneyToFolder = foldersArr.map(folder => {
        if (folder.id === folderId) {
          return {
            ...folder,
            amount: folder.amount - amount,
          };
        } else {
          return folder;
        }
      });

      await AsyncStorage.setItem(
        '@nuclone:folder',
        JSON.stringify(addMoneyToFolder),
      );
    }
  }

  return (
    <MoneyContext.Provider
      value={{money, savedMoney, handleSaveMoney, handleRecoveryMoney}}>
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
