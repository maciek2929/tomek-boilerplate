import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { CartState } from './cart/reducer';
import reducer from './reducer';

export interface StoreState {
    cart: CartState;
}

export const store = createStore(reducer, composeWithDevTools());
