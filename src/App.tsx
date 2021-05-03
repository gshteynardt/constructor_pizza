import { useState, SyntheticEvent } from 'react';

import ConstructorPizza from './components/ConstructorPizza';
import TotalOrder from './components/TotalOrder';
import { useCompositionContext } from './contexts/CompositionPizzaContext';

const App = () => {
  const [showOrder, setShowOrder] = useState(false);
  const { state, price } = useCompositionContext();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowOrder(old => !old);
  };

  return (
    <div className="App">
      <ConstructorPizza onSubmit={handleSubmit} />
      {showOrder && (
        <TotalOrder
          price={price}
          composition={state}
        />
      )}
    </div>
  );
};

export default App;
