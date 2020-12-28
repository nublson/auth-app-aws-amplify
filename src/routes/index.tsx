import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Authentication from './authentication.routes';

const Router = () => {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
};

export default Router;
