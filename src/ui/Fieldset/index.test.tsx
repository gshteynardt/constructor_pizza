import { render } from '@testing-library/react';

import Fieldset from './index';
import Checkbox from '../Checkbox';

describe('Fieldset', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Fieldset>
        <Checkbox label="Test"/>
      </Fieldset>
    );

    expect(getByText("Test")).toBeTruthy();
  })
});
