import reducer from "./reducer";
import { ADD_TO_CART } from "./actions";

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, null))
            .toEqual({ items: [] });
    })

    it('should handle ADD_TO_CART', () => {
        expect(
            reducer({
                items: []
            }, {
                type: ADD_TO_CART,
                payload: { name: "Test name" }
            })
        ).toEqual({ items: [{ name: "Test name" }] })
    })
});
