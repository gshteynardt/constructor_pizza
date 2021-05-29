import { useState, useEffect } from 'react';

import { mockPizzaConfig } from '../mocks';

export default () => {
  const [toppings, setToppings] = useState<typeof mockPizzaConfig>(mockPizzaConfig);

  return { toppings };
};
