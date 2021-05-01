import { InputHTMLAttributes, memo } from 'react';

import './style.scss';

export type Props = InputHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <fieldset {...rest} className="Fieldset">
      {children}
    </fieldset>

  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Fieldset, areEqual);
