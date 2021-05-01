import React, { useEffect, useMemo } from 'react';

import ConstructorPizza from './components/ConstructorPizza';
import Button from './ui/Button';
import useConstructorPizza from './hooks/useConstructorPizza';

const App = () => {

  return (
    <div className="App">
      <ConstructorPizza />
    </div>
  );
};

export default App;
