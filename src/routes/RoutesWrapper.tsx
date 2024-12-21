import React from 'react';
import { useRoutes } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const RoutesWrapper: React.FC = () => {
  const routes = useRoutes(AppRoutes);
  return <>{routes}</>;
};

export default RoutesWrapper;
