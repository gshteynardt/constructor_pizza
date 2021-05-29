import { memo, SyntheticEvent } from 'react';

import { useSammaryPizzaContext } from '../../contexts/SummaryPizzaContext';
import usePizzaTopping from '../../hooks/usePizzaTopping';
import Fieldset from '../../ui/Fieldset';
import Checkbox from '../../ui/Checkbox';
import Button from '../../ui/Button';
import Radio from '../../ui/Radio';

import {
  SIZE,
  DOUGH,
  SAUCES,
  CHEESES,
  VEG,
  MEAT,
} from '../../const';

interface Props {
  onSubmit: (e: SyntheticEvent) => void;
}

const ConstructorPizza = (props: Props) => {
  const { onSubmit } = props;
  const { state, dispatch } = useSammaryPizzaContext();
  const { size, dough, sauces, veg, cheeses, meat } = state;
  const { toppings } = usePizzaTopping();

  return (
    <>
      <form onSubmit={onSubmit}>
        <Fieldset>
          <span>Size: </span>
          {toppings.size.map(item => (
            <Radio
              key={item}
              label={`${item}cm`}
              name="size"
              checked={item === size}
              onChange={() => dispatch({ type: SIZE, payload: item })}
            />
          ))}
        </Fieldset>
        <Fieldset>
          <span>Dough: </span>
          {toppings.dough.map(item => (
            <Radio
              key={item}
              label={item}
              name="dough"
              checked={item === dough}
              onChange={() => dispatch({ type: DOUGH, payload: item })}
            />
          ))}
        </Fieldset>
        <Fieldset>
          <span>Sauces: </span>
          {toppings.sauces.map(item => (
            <Radio
              key={item}
              label={item}
              name="sauces"
              checked={item === sauces}
              onChange={() => dispatch({ type: SAUCES, payload: item })}
            />
          ))}
        </Fieldset>
        <Fieldset>
          <span>Сheeses: </span>
          {toppings.cheeses.map(item => (
            <Checkbox
              key={item}
              label={item}
              name="cheeses" checked={cheeses.includes(item)}
              onChange={() => dispatch({ type: CHEESES, payload: item })}
            />
          ))}
        </Fieldset>
        <Fieldset>
          <span>Vegetables: </span>
          {toppings.vegetables.map(item => (
            <Checkbox
              key={item}
              label={item}
              name="veg"
              checked={veg.includes(item)}
              onChange={() => dispatch({ type: VEG, payload: item })}
            />
          ))}
        </Fieldset>
        <Fieldset>
          <span>Meat: </span>
          {toppings.meat.map(item => (
            <Checkbox
              key={item}
              label={item}
              name="meat"
              checked={meat.includes(item)}
              onChange={() => dispatch({ type: MEAT, payload: item })}
            />
          ))}
        </Fieldset>
        <Button type="submit">Show order</Button>
      </form>
    </>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(ConstructorPizza, areEqual);
