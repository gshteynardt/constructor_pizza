import { createContext, useContext, useReducer, ReactNode } from 'react';

import useCalculatePrice from '../hooks/useCalculatePrice';
import reducer from '../lib/reducer';
import { INITIAL_STATE } from '../const';

interface Props {
  children: ReactNode;
};

const SammaryContext = createContext<any>({});

const SammaryPizzaProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { price } = useCalculatePrice(state);

  return (
    <SammaryContext.Provider value={{ state , dispatch, price }}>
      {children}
    </SammaryContext.Provider>
  );
};

export default SammaryPizzaProvider;

export const useSammaryPizzaContext = () => useContext(SammaryContext);
