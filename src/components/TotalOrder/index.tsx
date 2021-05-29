import { memo } from 'react';

import { InitialStateType } from '../../types';

interface Props {
  price: number;
  summary: InitialStateType;
}

const TotalOrder = (props: Props) => {
  const { price, summary } = props;
  const sammaryArray = Object.entries(summary).map(item => item.flat());

  return (
    <div>
      <span>Total: {price}</span>
      {sammaryArray.map(item => (
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
