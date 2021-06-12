import { render } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Button role="button">Test</Button>);
    const button = getByRole('button');
    expect(button).toHaveTextContent('Test');
  });
});
