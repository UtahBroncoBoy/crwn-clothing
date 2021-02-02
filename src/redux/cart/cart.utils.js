export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => {return cartItem.id === cartItemToAdd.id});

    //If the item already exists in the cart, return the cart item, with an increased quantity of one
    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        );
    }

    //If the item does not exist in the cart, return all cart items with the new item, having a quantity of one
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => {return cartItem.id === cartItemToRemove.id});

    //Remove the existing item, if there is only one
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
    }

    //Reduce the quantity of the existing item by one, if there is more than one
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};