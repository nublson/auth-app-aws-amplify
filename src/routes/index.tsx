import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Authentication from './authentication.routes';

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Authentication />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
