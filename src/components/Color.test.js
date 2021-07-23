import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const sampleColor = {
    color: 'green',
    code: {hex: '#228B22'},
    id: 1
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={sampleColor}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={sampleColor}/>)
    const color = screen.queryAllByTestId('color')
    expect(color).toBeInTheDocument()
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const handleDelete = jest.fn()
    const toggleEdit = jest.fn()
    render (<Color color={sampleColor}/>)
    const deleteColor = screen.getByTestId('delete')
    userEvent.click(deleteColor)
    expect(handleDelete).toBeCalled()
    expect(toggleEdit).toBeCalled()
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const setEditColor = jest.fn()
    const toggleEdit = jest.fn()
    render (<Color color={sampleColor}/>)
    const selectedColor = screen.getByTestId('color')
    userEvent.click(selectedColor)
    expect(setEditColor).toBeCalled()
    expect(toggleEdit).toBeCalled()
});