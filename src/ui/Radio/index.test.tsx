import { render } from '@testing-library/react';

import Radio from './index';

describe('Radio', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Radio label="Test" />);
    expect(getByText("Test")).toBeTruthy();
  })
});
