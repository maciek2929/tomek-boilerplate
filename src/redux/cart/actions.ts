

import { Product } from "../product/types";

/*
 * action types
 */
enum Types {
    ADD_TO_CART = "ADD_TO_CART",
}

export type Action = { type: Types.ADD_TO_CART, payload: Product } | null;
export const { ADD_TO_CART } = Types;

/*
 * action creators
 */

export const addToCart = (payload: Product): Action => ({ type: ADD_TO_CART, payload })

