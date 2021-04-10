import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //This is telling redux persist we want to use local storage as our default storage (not session storage)

import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';

//The object we use to set configurations for redux persist.
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] 
};

const rootReducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);