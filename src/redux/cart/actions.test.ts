import { ADD_TO_CART, addToCart } from "./actions";

describe("actions", () => {
    it("should create an action to add to cart", () => {
        const payload = {
            name: "Testing product name"
        };

        const expectedAction = {
            type: ADD_TO_CART,
            payload
        };

        expect(addToCart(payload)).toEqual(expectedAction)
    })
})