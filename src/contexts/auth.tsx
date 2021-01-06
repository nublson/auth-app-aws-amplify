import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useState, useEffect, useContext } from 'react';

import * as auth from '../services/auth';

interface IUser {
  name: string;
  email: string;
}

interface IAuthContextProps {
  signed: boolean;
  loading: boolean;
  user: IUser | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const signIn = async () => {
    const response = await auth.signIn();

    setUser(response.user);

    // api.defaults.headers.Authorization = `Bearer ${response.token}`

    await AsyncStorage.setItem('@RNAuth:token', response.token);
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser(null);
  };

  const loadStorageData = async () => {
    try {
      const [storagedUser, storagedToken] = await AsyncStorage.multiGet([
        '@RNAuth:user',
        '@RNAuth:token',
      ]);

      if (storagedUser[1] && storagedToken[1]) {
        // api.defaults.headers.Authorization = `Bearer ${storagedToken[1]}`
        setUser(JSON.parse(storagedUser[1]));
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading,
        user,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
