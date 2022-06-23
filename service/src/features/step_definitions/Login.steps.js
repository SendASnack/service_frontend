import React from 'react';
import {defineFeature, loadFeature} from 'jest-cucumber';
import Login from '../../Views/Login/Login';
import {render, fireEvent, act} from '@testing-library/react';
import {toast} from 'react-toastify';
const axios = require('axios');

const feature = loadFeature('./src/features/login.feature');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

jest.mock('axios', () => {
    const actual = jest.requireActual('axios');
    Object.assign(actual, {post: jest.fn()});
    return actual;
});

defineFeature(feature, test => {

    let getElement;
    let button;

    let api;
    let spy;
    let toastCalls;

    beforeEach(() => {
        act(() => {
            toastCalls = [];
            spy = toast.mockImplementation((...args) => {
                toastCalls.push(args[0])
            });

            api = axios.post.mockImplementation(() => {
                return Promise.resolve({
                    data: { message: 'The user was successfully registered!' }
                });
            });

            const {getByTestId} = render(<Login />);
            getElement = getByTestId;

        });
    });

    test('Detect the submit action', ({given, when, then}) => {

        given('I am in the Login page', () => {
            button = getElement("submit-button");
        });

        when('I click the submit button', () => {
            fireEvent.click(button);
        });

        then('I should be notified', () => {
            expect(toastCalls.length).toEqual(1);
        });
    });

    test('Submit with empty fields', ({given, and, when, then}) => {

        given('I am in the Login page', () => {
            button = getElement("submit-button");
        });

        when(/^I enter the email "(.*)"$/, (arg0) => {
            const email = getElement('input-field-Email');
            fireEvent.change(email, {target: {value: arg0}});
        });

        and(/^password "(.*)"$/, (arg0) => {
            const password = getElement('input-field-Password');
            fireEvent.change(password, {target: {value: arg0}});
        });

        and('I click the submit button', () => {
            fireEvent.click(button);
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });

    test('Submit successfully', ({given, and, when, then}) => {

        given('I am in the Login page', () => {
            button = getElement("submit-button");
        });

        when(/^I enter the email "(.*)"$/, (arg0) => {
            const email = getElement('input-field-Email');
            fireEvent.change(email, {target: {value: arg0}});
        });

        and(/^I enter the password "(.*)"$/, (arg0) => {
            const password = getElement('input-field-Password');
            fireEvent.change(password, {target: {value: arg0}});
        });

        and('I click the submit button', () => {
            fireEvent.click(button);
        });

        then('I should be in the Home page', () => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual('The user was successfully registered!');
        });
    });
});