import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/Cart';
import productReducer from './reducers/Product';

const store = configureStore({
    reducer: {
        cart: cartReducer, 
        product: productReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

