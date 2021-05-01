import { InputHTMLAttributes, memo } from 'react';

import './style.scss';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = (props: Props) => {
  const { label, ...rest } = props;

  return (
    <label className="Radio" >
      <input {...rest} type="radio" />
      <span className="Radio__Label">{label}</span>
    </label>

  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Radio, areEqual);
