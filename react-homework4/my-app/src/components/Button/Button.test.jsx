
import React from 'react';
import Button from "./Button";
import {render, screen} from "@testing-library/react";


describe("Button", () => {
    const {getByText} = screen
    test('Smoke', () => {
        render(<Button/>)
    })



    test('If className added', () => {
        render(<Button text='btn' />)
        expect(getByText('btn')).toHaveTextContent('btn')
    })
})