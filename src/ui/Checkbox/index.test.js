import { render } from '@testing-library/react';

import Checkbox from './index';

describe('Checkbox', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Checkbox label="Test" />);
    expect(getByText("Test")).toBeTruthy();
  })
});