import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Layout from '../../components/Layout';
import { Buttons } from '../../components/shared';
import { Container, Logo, Content } from './styles';

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
              navigate('SignIn');
            }}
          />

          <Layout.Footer signIn />
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default Auth;
