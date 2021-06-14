import { memo } from 'react';

interface Props {
  onSignUp?: () => void;
}

const SignUp = (props: Props) => {
  const { onSignUp } = props;

  return (
    <>
      <h2>SignUp form</h2>
      <button onClick={onSignUp}>Signup</button>
    </>
  );
};

export default memo(SignUp);
