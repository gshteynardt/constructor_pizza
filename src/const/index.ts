import { InitialStateType } from '../types';

export * from './routes';

const SIZE = 'SIZE';
const DOUGH = 'DOUGH';
const SAUCES = 'SAUCES';
const CHEESES = 'CHEESES';
const VEG = 'VEG';
const MEAT = 'MEAT';

const SMALL_SIZE_PIZZA = 30;
const LARGE_SIZE_PIZZA = 35;

const INITIAL_PRICE = 200;
const LARGE_PIZZA_PRICE = 50;
const TOPPING_PRICE = 29;

const INITIAL_STATE: InitialStateType = {
  size: SMALL_SIZE_PIZZA,
  dough: 'thin',
  sauces: 'tomato',
  cheeses: [],
  vegetables: [],
  meat: [],
};
  
export {
  SIZE,
  DOUGH,
  SAUCES,
  CHEESES,
  VEG,
  MEAT,
  SMALL_SIZE_PIZZA,
  LARGE_SIZE_PIZZA,
  INITIAL_PRICE,
  LARGE_PIZZA_PRICE,
  TOPPING_PRICE,
  INITIAL_STATE,
};
