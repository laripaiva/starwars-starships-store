import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../utils/types";
import { getOrderIndexInCart, isTheProductInTheCart } from '../../helpers/store';

const initialState: CartItem[] = [];

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrderToCart(state, action: PayloadAction<CartItem>) {
            if (!isTheProductInTheCart(state, action.payload.product)) {
                state.push(action.payload);
            }
        }, 
        removeOrderFromCart(state, action: PayloadAction<CartItem>) {
            const orderIndexInCart = getOrderIndexInCart(state, action.payload.product);
            state.splice(orderIndexInCart, 1);
        },
        emptyCart(state) {
            state.length = 0;
        }
    }
});

export const { addOrderToCart, removeOrderFromCart, emptyCart } = cart.actions;

export default cart.reducer;
