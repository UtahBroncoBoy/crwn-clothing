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
}