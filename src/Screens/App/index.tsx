import React from 'react';
import { Text, Button } from 'react-native';

import { useAuth } from '../../contexts/auth';
import { Container } from './styles';

const App: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Text>App</Text>
      <Button title="Sign Out" onPress={signOut} />
    </Container>
  );
};

export default App;
