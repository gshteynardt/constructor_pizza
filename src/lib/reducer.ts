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
import { ActionType } from '../types';

const reducer = (state: InitialStateType, action: { type: ActionType; payload: any }) => {
  const { payload } = action;
  const { cheeses, vegetables, meat } = state;

  switch (action.type) {
    case SIZE:
      return { ...state, size: payload as number };
    case DOUGH:
      return { ...state, dough: payload as string };
    case SAUCES:
      return { ...state, sauces: payload as string };
    case CHEESES:
      return { ...state, cheeses: [...getNewArray(cheeses, payload as string)] };
    case VEG:
      return { ...state, vegetables: [...getNewArray(vegetables, payload as string)] };
    case MEAT:
      return { ...state, meat: [...getNewArray(meat, payload as string)] };
    default: return state;
  };
};

export default reducer;
