import { memo } from 'react';

interface Props {
  onSignIn?: () => void;
}

const SignIn = (props: Props) => {
  const { onSignIn } = props;

  return (
    <>
      <h2>SignIn form</h2>
      <button onClick={onSignIn}>Sign in</button>
    </>
  );
};

export default memo(SignIn);
