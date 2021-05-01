import { memo } from 'react';

import useConstructorPizza from '../hooks/useConstructorPizza';
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

const ConstructorPizza = () => {
  const { state, dispatch } = useConstructorPizza();
  const { size, dough, sauces, veg, cheeses, meat } = state;

  return (
    <form>
      <fieldset>
        <span>Size</span>
        {mockPizzaSize.map(item => (
          <Radio
            key={item}
            label={`${item}cm`}
            name="size"
            checked={item === size}
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
            checked={item === dough}
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
            checked={item === sauces}
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
            name="cheeses" checked={cheeses.includes(item)}
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
            checked={veg.includes(item)}
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
            checked={meat.includes(item)}
            onChange={() => dispatch({ type: MEAT, payload: item })}
          />
        ))}
      </fieldset>
    </form>
  );
};

const areEqual = () => true;

export default memo(ConstructorPizza, areEqual);
