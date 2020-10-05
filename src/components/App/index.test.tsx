import React from 'react';
import { createStore, combineReducers } from 'redux';
import { mount } from 'enzyme';
import App from '.';
import { Provider } from 'react-redux';
import cart from '../../redux/cart/reducer';

const mockStore = (reducers = {}, store = {}) => createStore(combineReducers(reducers), store);
const wrapWithStore = (node: JSX.Element, reducers = {}, store = {}) => <Provider store={mockStore(reducers, store)}>{node}</Provider>
const mountWithStore = (node: JSX.Element, reducers = {}, store = {}) => mount(wrapWithStore(node, reducers, store));

describe('renders welcome message', () => {
  it('renders welcome message', () => {
    const wrapper = mountWithStore(<App />, { cart });
    const welcome = <h2>Workshops React, Redux, TS - Maciej Opozda</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
