import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import userEvent from '@testing-library/user-event';

const sampleColor = {
    color: 'green',
    code: {hex: '#228B22'},
    id: 1
}

test("Renders an empty list of colors without errors", () => {
    render(<ColorList color={[]}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList color = {sampleColor}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const activeEdit = jest.fn()
    render (<ColorList color={sampleColor}/>)
    const userEditing = screen.queryAllByTestId('color')
    userEvent.click(userEditing)
    expect(activeEdit).toBeCalled()
});
