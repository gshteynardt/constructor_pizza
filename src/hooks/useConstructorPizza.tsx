import { useReducer } from 'react';

import { INITIAL_STATE } from '../const';
import reducer from '../lib/reducer';
import useCalculatePrice from './useCalculatePrice';

const useConstructorPizza = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { price, composition } = useCalculatePrice(state);

  return { state, dispatch, price, composition };
};

export default useConstructorPizza;
