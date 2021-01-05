import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useRef } from 'react';

import Layout from '../../../components/Layout';
import { Buttons, Header, Input } from '../../../components/shared';
import { Container, Content, InputGroup, Footer } from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const signIn = (email: string, password: string) => {
    console.log({ email, password });
  };

  const handleSubmit: SubmitHandler<FormData> = (data, { reset }) => {
    signIn(data.email, data.password);

    reset();
  };

  return (
    <Layout.Screen>
      <Container>
        <Header.Auth title="Welcome back" subtitle="Sign in to your account" />

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
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
          </Form>

          <Footer>
            <Buttons.Submit
              title="Continue"
              invert
              onPress={() => {
                formRef.current?.submitForm();
              }}
            />
            <Layout.Footer invert signIn />
          </Footer>
        </Content>
      </Container>
    </Layout.Screen>
  );
};

export default SignIn;
