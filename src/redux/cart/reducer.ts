import { Action, ADD_TO_CART } from "./actions";
import { Product } from "../product/types";

export interface CartState {
    items: Product[];
}

const initialState = {
    items: [],
}

const cartReducer = (state: CartState = initialState, action?: Action) => {
    switch (action?.type) {
        case ADD_TO_CART:
            return {
                items: [...state.items, action?.payload]
            };
        default:
            return state
    }
};

export default cartReducer;