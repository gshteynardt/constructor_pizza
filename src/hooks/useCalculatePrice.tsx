import { useEffect, useState } from 'react';

import { InitialStateType } from '../types';
import {
  LARGE_SIZE_PIZZA,
  INITIAL_PRICE,
  LARGE_PIZZA_PRICE,
  TOPPING_PRICE,
} from '../const';

const useCalculatePrice = (props: InitialStateType) => {
  const { size, dough, sauces, cheeses, veg, meat } = props;
  const [price, setPrice] = useState<number>(0);
  const [composition, setComposition] = useState<(string | number)[]>([]);

  useEffect(() => {
    setPrice(INITIAL_PRICE);

    if (size === LARGE_SIZE_PIZZA) {
      setPrice(state => state + LARGE_PIZZA_PRICE);
    }

    setPrice(
      state =>
        state +
        (cheeses.length + veg.length + meat.length)
        * TOPPING_PRICE,
    );

    setComposition([size, dough, sauces, ...cheeses, ...veg, ...meat]);
  }, [cheeses, dough, meat, props, sauces, size, veg]);

  return { price, composition };
};

export default useCalculatePrice;
