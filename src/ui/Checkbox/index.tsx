import { InputHTMLAttributes, memo } from 'react';

import './style.scss';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = (props: Props) => {
  const { label, ...rest } = props;

  return (
    <label className="Checkbox">
      <input {...rest} type="checkbox" />
      <span className="Checkbox__Label" >{label}</span>
    </label>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Checkbox, areEqual);
