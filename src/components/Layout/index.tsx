import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';

import { Buttons } from '../shared';

interface IFooterProps {
  signIn?: boolean;
  invert?: boolean;
}

interface IFooterStyleProps {
  invert?: boolean;
}

export const StyledFooter = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Caption = styled.Text<IFooterStyleProps>`
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  color: ${(props) => (!props.invert ? ` #fff` : `#000`)};
`;

const Footer: React.FC<IFooterProps> = ({ invert, signIn }) => {
  const { navigate } = useNavigation();

  return (
    <StyledFooter>
      <Caption invert={invert}>
        {signIn ? 'Don’t have an account? ' : 'Already have an account?'}
      </Caption>
      <Buttons.Link
        title={signIn ? 'Sign Up' : 'Sign In'}
        invert={invert}
        onPress={() => {
          navigate(signIn ? 'SignUp' : 'SignIn');
        }}
      />
    </StyledFooter>
  );
};

export const Screen: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const Layout = {
  Footer,
  Screen,
};

export default Layout;
