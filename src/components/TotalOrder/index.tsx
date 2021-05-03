import { memo } from 'react';

import { InitialStateType } from '../../types';

interface Props {
  price: number;
  composition: InitialStateType;
}

const TotalOrder = (props: Props) => {
  const { price, composition } = props;
  const compositionArray = Object.entries(composition).map(item => item.flat());

  return (
    <div>
      <span>Total: {price}</span>
      {compositionArray.map(item => (
        <div key={item[0]}>
          <span>{item[0]}: </span>
          <span>{item.slice(1).join(', ')}</span>
        </div>
      ))}
    </div>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(TotalOrder, areEqual);
