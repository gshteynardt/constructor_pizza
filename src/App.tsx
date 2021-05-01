import React, { useEffect, useMemo } from 'react';

import ConstructorPizza from './components/ConstructorPizza';
import useConstructorPizza from './hooks/useConstructorPizza';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <ConstructorPizza />
    </div>
  );
};

export default App;
