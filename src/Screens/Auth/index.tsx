import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { Buttons } from '../../components/shared';
import { Container, Logo, Content, Footer, Caption } from './styles';

const Auth = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <Container>
        <Logo>W</Logo>

        <Content>
          <Buttons.Submit
            title="Sign In"
            onPress={() => {
              navigate('Default');
            }}
          />

          <Footer>
            <Caption>Don’t have an account?</Caption>
            <Buttons.Link
              title="Sign Up"
              onPress={() => {
                navigate('Default');
              }}
            />
          </Footer>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default Auth;
