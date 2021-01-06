import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import App from '../Screens/App';

const AppStack = createStackNavigator();

const ApplicationRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <AppStack.Screen name="Home" component={App} />
    </AppStack.Navigator>
  );
};

export default ApplicationRoutes;
