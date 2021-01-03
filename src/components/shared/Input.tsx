import { useNavigation } from '@react-navigation/native';
import { useField } from '@unform/core';
import React, { useRef, useEffect } from 'react';
import { TextInputProps, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface IInputProps extends TextInputProps {
  name: string;
  label: string;
  password?: boolean;
}

interface InputReference {
  value: string;
}

const StyledInput = styled.View`
  width: 100%;
  height: 50px;
  padding: 15px 10px;
  background-color: #f4f4f4;
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  color: #c2c2c2;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
  text-transform: capitalize;
`;
const Field = styled(TextInput)`
  color: #414141;
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  margin-left: 20px;
  flex: 1;
`;

const ForgotPasswordButton = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  text-decoration: underline;
`;

const TextField: React.FC<IInputProps> = ({ name, label, password, ...rest }) => {
  const { navigate } = useNavigation();

  const { fieldName, registerField, defaultValue = '', error, clearError } = useField(name);

  const inputElementRef = useRef<TextInput>(null);
  const inputValueRef = useRef<InputReference>({
    value: defaultValue,
  });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      setValue(ref: InputReference, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current?.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current?.clear();
      },

      getValue(ref: InputReference) {
        return ref.value;
      },
    });
  }, [fieldName, registerField, inputElementRef]);

  return (
    <>
      <StyledInput>
        <Label>{label}</Label>
        <Field
          ref={inputElementRef}
          defaultValue={defaultValue}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
      </StyledInput>
      {password && (
        <BorderlessButton
          onPress={() => {
            navigate('Default');
          }}
          style={{ alignSelf: 'flex-end' }}>
          <ForgotPasswordButton>Forgot password?</ForgotPasswordButton>
        </BorderlessButton>
      )}
    </>
  );
};

const Input = {
  TextField,
};

export default Input;
