import { render, screen, fireEvent } from '@testing-library/react';

import TotalOrder from './index';

const sammary = {
  size: 35,
  dough: 'thin',
  sauces: 'spicy',
  cheeses: ['mozzarella', 'dorblue', 'chedar'],
  vegetables: ['tomato', 'mushroom', 'pepper'],
  meat: ['bacon', 'pepperoni', 'ham'],
}
describe('TotalOrder', () => {
  it('renders correctly', () => {
    const { container } = render(<TotalOrder price={511} summary={sammary} />);

    expect(container).toContainHTML('Total: 511');
    expect(container).toContainHTML('size: 35');
    expect(container).toContainHTML('dough: thin');
    expect(container).toContainHTML('sauces: spicy');
    expect(container).toContainHTML('cheeses: mozzarella, dorblue, chedar');
    expect(container).toContainHTML('vegetables: tomato, mushroom, pepper');
    expect(container).toContainHTML('meat: bacon, pepperoni, ham');
  })
})