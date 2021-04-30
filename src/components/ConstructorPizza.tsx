import React, { memo, useReducer } from 'react';

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

const initialState: InitialStateType = {
  size: 30,
  dough: 'thin',
  sauces: [],
  cheeses: [],
  veg: [],
  meat: [],
};

const ConstructorPizza = () => {
  //const [state, dispatch] = useReducer(reducerPizza, initialState);

  return (
    <form>
      <fieldset>
        <span>Size</span>
        {mockPizzaSize.map(item => (
          <Radio
            label={`${item}cm`}
            name="size"
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Dough</span>
        {mockDough.map(item => (
          <Radio
            label={item}
            name="dough"
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Sauces</span>
        {mockSauces.map(item => (
          <Radio
            label={item}
            name="sauces"
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Сheeses</span>
        {mockСheeses.map(item => (
          <Checkbox
            label={item}
            name={item}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Vegetables</span>
        {mockVegetables.map(item => (
          <Checkbox
            label={item}
            name={item}
          />
        ))}
      </fieldset>
      <fieldset>
        <span>Meat</span>
        {mockMeat.map(item => (
          <Checkbox
            label={item}
            name={item}
          />
        ))}
      </fieldset>
    </form>
  );
};

const areEqual = () => true;

export default memo(ConstructorPizza, areEqual);
