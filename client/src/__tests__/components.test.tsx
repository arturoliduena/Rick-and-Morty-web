import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('test components', () => {
  it('renders Button', async () => {
    await render(<Button text='text test' onClick={() => {}}/>);
    expect(screen.getByText('text test')).toBeInTheDocument();
  });
})