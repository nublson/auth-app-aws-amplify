import React from 'react';

import { useAuth } from '../contexts/auth';
import Application from './application.routes';
import Authentication from './authentication.routes';

const Router: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <Application /> : <Authentication />;
};

export default Router;
