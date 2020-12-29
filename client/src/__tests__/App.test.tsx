import React from 'react';
import App from '../App';

import { render, fireEvent, screen } from '../test-utils'

it('Renders sorting buttons', () => {
  render(<App />, { initialState: { card: { cards: []} } })
  const buttonADD = screen.getByText(/\+/i)
  expect(buttonADD).toBeInTheDocument()
});
