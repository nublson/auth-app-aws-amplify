import React from 'react';
import {
  BorderlessButton,
  BorderlessButtonProperties,
  RectButton,
  RectButtonProperties,
} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ISubmitButtonProps extends RectButtonProperties {
  title: string;
  invert?: boolean;
}

interface ILinkButtonProps extends BorderlessButtonProperties {
  title: string;
  invert?: boolean;
}
interface ISubmitStyleProps {
  invert?: boolean;
}

const SignButton = styled(RectButton)<ISubmitStyleProps>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.invert ? `#000` : `#fff`)};
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const ButtonTitle = styled.Text<ISubmitStyleProps>`
  font-size: 18px;
  font-family: 'Roboto_500Medium';
  color: ${(props) => (props.invert ? `#fff` : `#000`)};
`;

const SignLink = styled.Text<ISubmitStyleProps>`
  font-family: 'Roboto_500Medium';
  text-decoration-line: underline;
  color: ${(props) => (props.invert ? `#000` : `#fff`)};
  margin-left: 2px;
`;

const Submit: React.FC<ISubmitButtonProps> = ({ title, invert, ...rest }) => {
  return (
    <SignButton invert={invert} {...rest}>
      <ButtonTitle invert={invert}>{title}</ButtonTitle>
    </SignButton>
  );
};

const Link: React.FC<ILinkButtonProps> = ({ title, invert, ...rest }) => {
  return (
    <BorderlessButton {...rest}>
      <SignLink invert={invert}>{title}</SignLink>
    </BorderlessButton>
  );
};

const Buttons = {
  Submit,
  Link,
};

export default Buttons;
