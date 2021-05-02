import { useState, SyntheticEvent } from 'react';

import ConstructorPizza from './components/ConstructorPizza';
import TotalOrder from './components/TotalOrder';
import useConstructorPizza from './hooks/useConstructorPizza';

const App = () => {
  const [showOrder, setShowOrder] = useState(false);
  const { price, composition } = useConstructorPizza();
  
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowOrder(old => !old);
  };

  return (
    <div className="App">
      <ConstructorPizza onSubmit={handleSubmit} />
      {showOrder && <TotalOrder price={price} composition={composition}/>}
    </div>
  );
};

export default App;
