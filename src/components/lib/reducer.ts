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

interface Action {
  type: string;
  payload: {
    size: number;
    dough: string,
    sauces: string,
    cheeses: string,
    veg: string,
    meat: string,
  }
}

const reducerPizza = (state: InitialStateType, action: Action) => {
  const { payload } = action;
  const { sauces, cheeses, veg, meat } = state;

  switch (action.type) {
    case SIZE:
      return { ...state, size: payload.size };
    case DOUGH:
      return { ...state, dough: payload.dough };
    case SAUCES:
      return { ...state, sauces: [...getNewArray(sauces, payload.sauces)] };
    case CHEESES:
      return { ...state, cheeses: [...getNewArray(cheeses, payload.cheeses)] };
    case VEG:
      return { ...state, veg: [...getNewArray(veg, payload.veg)] };
    case MEAT:
      return { ...state, meat: [...getNewArray(meat, payload.meat)] };
  };
};

export default reducerPizza;
