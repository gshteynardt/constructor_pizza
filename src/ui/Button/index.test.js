import { render, fireEvent, scrren } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
  describe('render Button', () => {
    it('renders correctly', () => {
      const { getByText } = render(<Button>Test</Button>);
      expect(getByText("Test")).toBeTruthy();
  });
})
  // describe('click Button', () => {
  //   it('on click Button', () => {
  //     const { getByText } = render(<Button>Test</Button>);
  //     fireEvent.click(getByText('Test'));
  //     const TotalElement = getByText(/Total/i);
  //     expect(TotalElement).toBeInTheDocument();
  //   });
  // })
});
