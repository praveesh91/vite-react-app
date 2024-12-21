import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWrapper from './routes/RoutesWrapper';

const App: React.FC = () => {
  return (
    <Router>
      <RoutesWrapper />
    </Router>
  );
};

export default App;
