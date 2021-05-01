import { InitialStateType } from '../types';
import {
  SIZE,
  DOUGH,
  SAUCES,
  CHEESES,
  VEG,
  MEAT,
} from '../const';
import getNewArray from './getNewArray';

type ActionType = typeof SIZE | typeof DOUGH | typeof SAUCES | typeof CHEESES | typeof VEG | typeof MEAT;

const reducer = (state: InitialStateType, action: { type: ActionType; payload: any }) => {
  const { payload } = action;
  const { cheeses, veg, meat } = state;

  switch (action.type) {
    case SIZE:
      return { ...state, size: payload };
    case DOUGH:
      return { ...state, dough: payload };
    case SAUCES:
      return { ...state, sauces: payload };
    case CHEESES:
      return { ...state, cheeses: [...getNewArray(cheeses, payload)] };
    case VEG:
      return { ...state, veg: [...getNewArray(veg, payload)] };
    case MEAT:
      return { ...state, meat: [...getNewArray(meat, payload)] };
    default: return state;
  };
};

export default reducer;
