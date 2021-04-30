import { InitialStateType } from '../../types';
import {
  SIZE,
  DOUGH,
  SAUCES,
  CHEESES,
  VEG,
  MEAT,
} from '../../const';
import getNewArray from './getNewArray';

const reducerPizza = (state: InitialStateType, action: { type?: any; payload?: any }) => {
  const { payload } = action;
  const { cheeses, veg, meat } = state;

  switch (action.type) {
    case SIZE:
      return { ...state, size: payload.size };
    case DOUGH:
      return { ...state, dough: payload.dough };
    case SAUCES:
      return { ...state, sauces: payload.sauces };
    case CHEESES:
      return { ...state, cheeses: [...getNewArray(cheeses, payload.cheeses)] };
    case VEG:
      return { ...state, veg: [...getNewArray(veg, payload.veg)] };
    case MEAT:
      return { ...state, meat: [...getNewArray(meat, payload.meat)] };
    default: return state;
  };
};

export default reducerPizza;
