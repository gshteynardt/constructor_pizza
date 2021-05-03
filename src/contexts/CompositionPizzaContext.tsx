import { createContext, useContext, useReducer, ReactNode, memo } from 'react';

import useCalculatePrice from '../hooks/useCalculatePrice';
import reducer from '../lib/reducer';
import { INITIAL_STATE } from '../const';

interface Props {
  children: ReactNode;
};

const CompositionContext = createContext<any>({});

const CompositionPizzaProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { price } = useCalculatePrice(state);

  return (
    <CompositionContext.Provider value={{ state , dispatch, price }}>
      {children}
    </CompositionContext.Provider>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(CompositionPizzaProvider, areEqual);

export const useCompositionContext = () => useContext(CompositionContext);
