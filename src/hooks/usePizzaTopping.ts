import { useState } from 'react';

import { mockPizzaConfig } from '../mocks';

export default () => {
  const [toppings] = useState<typeof mockPizzaConfig>(mockPizzaConfig);

  return { toppings };
};
