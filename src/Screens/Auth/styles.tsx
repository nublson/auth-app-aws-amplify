import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  background-color: #000;

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
