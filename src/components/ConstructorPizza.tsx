import { memo, useReducer } from 'react';

import { InitialStateType } from '../types';
import useCalculatePrice from '../hooks/useCalculatePrice';
import reducerPizza from './lib/reducer';
import Checkbox from '../ui/Checkbox';
import Radio from '../ui/Radio';
import {
  mockPizzaSize,
  mockDough,
  mockSauces,
  mockСheeses,
  mockVegetables,
  mockMeat,
} from '../mocks';
import {
  SIZE,
  DOUGH,
  SAUCES,
  CHEESES,
  VEG,
  MEAT,
  SMALL_SIZE_PIZZA,
} from '../const';

const initialState: InitialStateType = {
  size: SMALL_SIZE_PIZZA,
  dough: 'thin',
  sauces: 'tomato',
  cheeses: [],
  veg: [],
  meat: [],
};

const ConstructorPizza = () => {
  const [state, dispatch] = useReducer(reducerPizza, initialState);

  const { price, compositionPizza } = useCalculatePrice(state);
  console.log(price, compositionPizza);

  return (
    <form>
      <fieldset>
        <span>Size</span>
        {mockPizzaSize.map(item => (
          <Radio
            key={item}
            label={`${item}cm`}
            name="size"
            checked={item === state.size}
            onChange={() => dispatch({ type: SIZE, payload: item })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Dough</span>
        {mockDough.map(item => (
          <Radio
            key={item}
            label={item}
            name="dough"
            checked={item === state.dough}
            onChange={() => dispatch({ type: DOUGH, payload: item })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Sauces</span>
        {mockSauces.map(item => (
          <Radio
            key={item}
            label={item}
            name="sauces"
            checked={item === state.sauces}
            onChange={() => dispatch({ type: SAUCES, payload: item })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Сheeses</span>
        {mockСheeses.map(item => (
          <Checkbox
            key={item}
            label={item}
            name="cheeses" checked={state.cheeses.includes(item)}
            onChange={() => dispatch({ type: CHEESES, payload: item })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Vegetables</span>
        {mockVegetables.map(item => (
          <Checkbox
            key={item}
            label={item}
            name="veg"
            checked={state.veg.includes(item)}
            onChange={() => dispatch({ type: VEG, payload: item })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Meat</span>
        {mockMeat.map(item => (
          <Checkbox
            key={item}
            label={item}
            name="meat"
            checked={state.meat.includes(item)}
            onChange={() => dispatch({ type: MEAT, payload: item })}
          />
        ))}
      </fieldset>
    </form>
  );
};

const areEqual = () => true;

export default memo(ConstructorPizza, areEqual);
