import {
  SIZE,
  DOUGH,
  SAUCES,
  CHEESES,
  VEG,
  MEAT,
} from './const';

export interface InitialStateType {
  size: number;
  dough: string;
  sauces: string;
  cheeses: string[];
  vegetables: string[];
  meat: string[];
}

export type ActionType = typeof SIZE | typeof DOUGH | typeof SAUCES | typeof CHEESES | typeof VEG | typeof MEAT;
