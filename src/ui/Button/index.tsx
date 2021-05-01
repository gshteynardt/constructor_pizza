import { memo, ButtonHTMLAttributes } from 'react';

import './style.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <button {...rest} className="Button">
      {children}
    </button>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Button, areEqual);
