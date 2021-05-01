import { useEffect, useState } from 'react';

import { InitialStateType } from '../types';
import {
  LARGE_SIZE_PIZZA,
  INITIAL_PRICE,
  LARGE_PIZZA_PRICE,
  FILLER_PRICE,
} from '../const';

const useCalculatePrice = (props: InitialStateType) => {
  const { size, dough, sauces, cheeses, veg, meat } = props;
  const [price, setPrice] = useState<number>(0);
  const [compositionPizza, setCompositionPizza] = useState<(string | number)[]>([]);

  useEffect(() => {
    setPrice(INITIAL_PRICE);

    if (size === LARGE_SIZE_PIZZA) {
      setPrice(state => state + LARGE_PIZZA_PRICE);
    }

    [...cheeses, ...veg, ...meat].forEach(_ => setPrice(state => state + FILLER_PRICE));

    setCompositionPizza([size, dough, sauces, ...cheeses, ...veg, ...meat]);
  }, [cheeses, dough, meat, props, sauces, size, veg]);

  return { price, compositionPizza };
};

export default useCalculatePrice;
