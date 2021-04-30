import { InputHTMLAttributes, memo } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = (props: Props) => {
  const { label, ...rest } = props;

  return (
    <label>
      <input {...rest} type="checkbox" />
      <span>{label}</span>
    </label>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Checkbox, areEqual);
