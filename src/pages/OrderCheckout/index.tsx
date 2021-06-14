import { useState, SyntheticEvent, memo } from 'react';

import ConstructorPizza from '../../components/ConstructorPizza';
import TotalOrder from '../../components/TotalOrder';
import { useSammaryPizzaContext } from '../../contexts/SummaryPizzaContext';

const OrderCheckout = () => {
  const [showOrder, setShowOrder] = useState(false);
  const { state, price } = useSammaryPizzaContext();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowOrder(old => !old);
  };

  return (
    <>
      <ConstructorPizza onSubmit={handleSubmit} />
      {showOrder && (
        <TotalOrder
          price={price}
          summary={state}
        />
      )}
    </>
  );
};

export default memo(OrderCheckout);
