import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 25px;

  position: relative;
`;

export const Logo = styled.Text`
  font-size: 144px;
  font-family: 'Share_700Bold';
  color: #fff;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 64px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Caption = styled.Text`
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  color: #fff;
`;
