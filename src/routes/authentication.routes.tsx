import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Auth from '../Screens/Auth';
import SignIn from '../Screens/Auth/SignIn';
import SignUp from '../Screens/Auth/SignUp';
import Default from '../Screens/Default';

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

      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />

      <AuthStack.Screen name="Default" component={Default} />
    </AuthStack.Navigator>
  );
};

export default Authentication;
