import { render, fireEvent } from '@testing-library/react'
import Input from './Input'

it("renders correctly", () => {
    const {queryByTestId} = render(<Input />)

    expect(queryByTestId("input-field")).toBeTruthy() // check if input was rendered correctly
})

describe("Input value", () => {
    it("update on change", () => {
        const {queryByTestId} = render(<Input />)

        const input = queryByTestId("input-field"); // get input field
        fireEvent.change(input, {target: {value : "test"}}); //update value on input

        expect(input.value).toBe("test");
    })
})