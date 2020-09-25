import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Main from '../pages/Main';
import '@testing-library/jest-dom/extend-expect';

import getFormattedDate from '../utils/getFormattedDate'

describe('App tests...', () => {

  it('shoud be able create a new task', () => {
    const { getByTestId, getByText } = render(<Main />);

    const inputTaks = getByTestId('task-input');
    const buttonSubmit = getByText('Insert');

    fireEvent.change(inputTaks, { target: { value: 'new task' } });
    fireEvent.click(buttonSubmit);

    getByTestId('task-0');
  })

  it('shoud be able delete a task', () => {
    const { getByTestId, getByText } = render(<Main />);

    const inputTaks = getByTestId('task-input');
    const buttonSubmit = getByText('Insert');

    fireEvent.change(inputTaks, { target: { value: 'new task' } });
    fireEvent.click(buttonSubmit);

    const buttonDelete = getByText('Delete');
    fireEvent.click(buttonDelete);

  })

  it('shoud be able edit a task', () => {
    const { getByTestId, getByText } = render(<Main />);

    const inputTaks = getByTestId('task-input');
    const buttonSubmit = getByText('Insert');

    fireEvent.change(inputTaks, { target: { value: 'new task' } });
    fireEvent.click(buttonSubmit);

    const buttonEdit = getByText('Edit');
    fireEvent.click(buttonEdit);

    getByTestId('task-0');
  })

  it('shoud be able return correct format date', () => {
    const date = getFormattedDate(1601059554021)
    expect(date).toEqual('9/25/2020 -> 15:45');
  })

  // throws format date

})