import { useState, SyntheticEvent } from 'react';

import ConstructorPizza from './components/ConstructorPizza';
import TotalOrder from './components/TotalOrder';
import { useSammaryPizzaContext } from './contexts/SummaryPizzaContext';

const App = () => {
  const [showOrder, setShowOrder] = useState(false);
  const { state, price } = useSammaryPizzaContext();

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
          summary={state}
        />
      )}
    </div>
  );
};

export default App;
