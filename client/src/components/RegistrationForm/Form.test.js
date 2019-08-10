import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogInForm from "./Form";
import { fireEvent } from "@testing-library/react";
import { shallow } from "enzyme";
import Button from "@material-ui/core/Button";

afterEach(rtl.cleanup);

describe("<Form />", () => {
    it('form items render correctly',  () => {
        const { getByText, queryByPlaceholderText } = rtl.render(<LogInForm/>);
        expect(queryByPlaceholderText(/Username/i)).toBeInTheDocument();
        expect(queryByPlaceholderText(/Password/i)).toBeInTheDocument();
        expect(getByText(/submit/i)).toBeInTheDocument();
    });
    test('Submitting form', () => {
        const { getByText } = rtl.render(<LogInForm/>);
        const btn = getByText(/submit/i);
        fireEvent.click(btn);
        //What to expect?
    });
    test('Submit button', () => {
        const callBack = jest.fn();

        const button = shallow((<Button onClick={callBack}>Ok!</Button>));
        button.find('button').simulate('click');
        // expect(callBack.mock.calls.length).toEqual(1);
        //What to expect?
    });
});
