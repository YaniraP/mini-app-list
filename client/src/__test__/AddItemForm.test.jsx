import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import AddItemForm from '../components/AddItemForm';

it('Form should render without any errors', () => {
  render(
    <Provider store={store}>
      <AddItemForm/>
    </Provider>);
  expect(screen.getByRole('main')).toBeInTheDocument();
});

it('should render the Form content', () => {
  render(
    <Provider store={store}>
      <AddItemForm/>
    </Provider>);
  expect(screen.getByText('Add Item')).toBeInTheDocument();
});

