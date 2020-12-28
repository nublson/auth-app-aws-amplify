import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Auth from '../Screens/Auth';

const AuthStack = createStackNavigator();

const Authentication = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <AuthStack.Screen name="Auth" component={Auth} />
    </AuthStack.Navigator>
  );
};

export default Authentication;
