import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

test('Full app render and default navigation', () => {
  render(<App />, {wrapper: BrowserRouter});
  const title = screen.getByTestId(/game/i);
  expect(title).toBeInTheDocument();
});

test('Full app render and results navigation', () => {
  const url = '/results';
  render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>
  );
  const title = screen.getByTestId(/results/i);
  expect(title).toBeInTheDocument();
});

test('Full app render and help navigation', () => {
  const url = '/help';
  render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>
  );
  const title = screen.getByTestId(/help/i);
  expect(title).toBeInTheDocument();
});
