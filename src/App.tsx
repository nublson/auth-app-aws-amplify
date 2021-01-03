import 'react-native-gesture-handler';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Share_700Bold } from '@expo-google-fonts/share';
import AppLoading from 'expo-app-loading';
import React from 'react';

import Router from './routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Share_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Router />;
  }
};

export default App;
