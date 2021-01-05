import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

interface IAuthHeaderProps {
  title: string;
  subtitle: string;
}

const StyledHeader = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
`;
const Title = styled.Text`
  font-size: 28px;
  font-family: 'Roboto_700Bold';
  margin-top: 15px;
`;
const Subtitle = styled.Text`
  max-width: 85%;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  color: #c9c9c9;
`;

const Auth: React.FC<IAuthHeaderProps> = ({ title, subtitle }) => {
  const { goBack } = useNavigation();

  return (
    <StyledHeader>
      <BorderlessButton
        onPress={() => {
          goBack();
        }}>
        <Icon name="chevron-back-outline" size={25} color="black" />
      </BorderlessButton>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </StyledHeader>
  );
};

const Header = {
  Auth,
};

export default Header;
