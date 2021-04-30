import { memo, useReducer } from 'react';

import { InitialStateType } from '../types';
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
} from '../const';
const initialState: InitialStateType = {
  size: 30,
  dough: 'thin',
  sauces: [],
  cheeses: [],
  veg: [],
  meat: [],
};

const ConstructorPizza = () => {
  const [state, dispatch] = useReducer(reducerPizza, initialState);

  return (
    <form>
      <fieldset>
        <span>Size</span>
        {mockPizzaSize.map(item => (
          <Radio
            label={`${item}cm`}
            name="size"
            onChange={() => dispatch({ type: SIZE, payload: { size: item } })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Dough</span>
        {mockDough.map(item => (
          <Radio
            label={item}
            name="dough"
            onChange={() => dispatch({ type: DOUGH, payload: { dough: item } })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Sauces</span>
        {mockSauces.map(item => (
          <Radio
            label={item}
            name="sauces"
            onChange={() => dispatch({ type: SAUCES, payload: { sauces: item } })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Сheeses</span>
        {mockСheeses.map(item => (
          <Checkbox
            label={item}
            name="cheeses"
            onChange={() => dispatch({ type: CHEESES, payload: { cheeses: item } })}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Vegetables</span>
        {mockVegetables.map(item => (
          <Checkbox
            label={item}
            name="veg"
            onChange={() => dispatch({ type: VEG, payload: { veg: item } })}
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
            onChange={() => dispatch({ type: MEAT, payload: { meat: item } })}
          />
        ))}
      </fieldset>
    </form>
  );
};

const areEqual = () => true;

export default memo(ConstructorPizza, areEqual);
