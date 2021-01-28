import { createSelector } from 'reselect'

const selectCart = state => state.cart; //This is an input selector, which doesn't use createSelector

export const selectCartHidden = createSelector( //This is an output selector, which DOES use createSelector. These are memoized selectors.
    [selectCart], //There are two arguments passed into createSelector. The first one is an array of input selectors (These can be output selectors in their respective case.)
    cart => cart.hidden //The second argument is a function which selects the part of the input selectors to output
);

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantitity, cartItem) => 
                accumulatedQuantitity + cartItem.quantity, 
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantitity, cartItem) => 
            accumulatedQuantitity + cartItem.quantity * cartItem.price, 
        0
    )
);