import { memo } from 'react';

interface Props {
  price: number;
  composition: (string | number)[];
}

const TotalOrder = (props: Props) => {
  const { price, composition } = props;

  console.log(price, composition);

  return (
    <div>
      <span>Total: {price}</span>
    </div>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(TotalOrder, areEqual);
