import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Todo from '.';
import React from 'react';
import {  SettingsContext } from '../../Context/Settings/Settings';


describe('ToDo Component Tests', ()  => {
  test('render a header element as expected', () => {

    const contextVal = {
      incomplete: 0,
      defaultValues: {
        difficulty: 4
      }
    };
    render(
    <SettingsContext.Provider value = {contextVal}>
    <Todo />
    </SettingsContext.Provider>
    );

    let header = screen.getByTestId('todo-header');
    let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: 0 items pending');
  })
})