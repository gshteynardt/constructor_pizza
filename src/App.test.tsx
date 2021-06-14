import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App';

describe('App', () => {
  describe('sign in link click', () => {
    it('navigation to sign in page', () => {
      const history = createMemoryHistory();
      const { container } = render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(container.innerHTML).toMatch('You are home')

      const signInLink = screen.getByText(/sign in/i);

      fireEvent.click(signInLink);

      expect(container.innerHTML).toMatch('Sign in')
    })
  });

  describe('sign up link click', () => {
    it('navigation to sign up page', () => {
      const history = createMemoryHistory();
      const { container } = render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(container.innerHTML).toMatch('You are home')

      const signUpLink = screen.getByText(/sign up/i);

      fireEvent.click(signUpLink);

      expect(container.innerHTML).toMatch('Sign up')
    })
  });

  describe('order checkout link click', () => {
    it('navigation to order checkout page', () => {
      const history = createMemoryHistory();
      const { container } = render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(container.innerHTML).toMatch('You are home')

      const orderLink = screen.getByText(/order list/i);

      fireEvent.click(orderLink);
 
      expect(container.innerHTML).toMatch('Order List')
    })
  });

  describe('order checkout link click', () => {
    it('receipt to order checkout page', () => {
      const history = createMemoryHistory();
      const { container } = render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(container.innerHTML).toMatch('You are home')

      const receiptLink = screen.getByText(/receipt/i);

      fireEvent.click(receiptLink);
 
      expect(container.innerHTML).toMatch('Receipt')
    })
  });
  
  describe('with an unsupported URL', () => {
    it('shows 404 page', () => {
      const history = createMemoryHistory();
      history.push('/some/bad/route');

      const { container } = render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(screen.getByRole('heading')).toHaveTextContent('404 Not Found')
    })
  });
});