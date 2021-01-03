import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;

  position: relative;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const InputGroup = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Input = styled.View`
  width: 100%;
  padding: 15px 10px;
  background-color: #f4f4f4;
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  color: #c2c2c2;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
`;
export const Field = styled.TextInput`
  color: #414141;
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  margin-left: 20px;
  flex: 1;
`;

export const Footer = styled.View`
  width: 100%;
  margin: 50px 0 10px;
`;
