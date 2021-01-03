import React from 'react';
import { TextInputProps, TextInput } from 'react-native';
import styled from 'styled-components/native';

interface IInputProps extends TextInputProps {
  name: string;
  label: string;
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

const TextField: React.FC<IInputProps> = ({ name, label, ...rest }) => {
  return (
    <StyledInput>
      <Label>{label}</Label>
      <Field {...rest} />
    </StyledInput>
  );
};

const Input = {
  TextField,
};

export default Input;
