import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    const color = screen.getAllByTestId('color')

    await waitFor(() => {
        expect(color).toHaveLength(1)
    })
});