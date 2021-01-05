import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useRef } from 'react';

import Layout from '../../../components/Layout';
import { Buttons, Header, Input } from '../../../components/shared';
import { Container, Content, InputGroup, Footer } from './styles';

interface FormData {
  name: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const signUp = ({ name, email, newPassword, confirmPassword }: FormData) => {
    console.log({ name, email, newPassword, confirmPassword });
  };

  const handleSubmit: SubmitHandler<FormData> = (data, { reset }) => {
    signUp(data);

    reset();
  };

  return (
    <Layout.Screen>
      <Container>
        <Header.Auth
          title="Sign Up"
          subtitle="Create an account so you can order your favorite food even faster"
        />

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputGroup>
              <Input.TextField name="name" label="name" textContentType="name" />
              <Input.TextField
                name="email"
                label="email"
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <Input.TextField
                name="newPassword"
                label="password"
                autoCompleteType="password"
                textContentType="newPassword"
                secureTextEntry
              />
              <Input.TextField
                name="confirmPassword"
                label="confirm"
                autoCompleteType="password"
                textContentType="newPassword"
                secureTextEntry
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
            <Layout.Footer invert />
          </Footer>
        </Content>
      </Container>
    </Layout.Screen>
  );
};

export default SignUp;
