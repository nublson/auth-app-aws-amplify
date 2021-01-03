import React, { useRef } from 'react';

import Layout from '../../../components/Layout';
import { Buttons, Header, Input } from '../../../components/shared';
import { Container, Content, InputGroup, Footer } from './styles';

const SignIn: React.FC = () => {
  return (
    <Layout.Screen>
      <Container>
        <Header.Auth title="Welcome back" subtitle="Sign in to your account" />

        <Content>
          <InputGroup>
            <Input.TextField
              name="email"
              label="email"
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Input.TextField
              name="password"
              label="password"
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry
              password
            />
          </InputGroup>

          <Footer>
            <Buttons.Submit title="Continue" invert onPress={() => {}} />
            <Layout.Footer invert />
          </Footer>
        </Content>
      </Container>
    </Layout.Screen>
  );
};

export default SignIn;
