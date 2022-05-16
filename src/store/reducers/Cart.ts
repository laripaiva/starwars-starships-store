import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../utils/types";
import { getOrderIndexInCart } from '../../helpers/store';

const initialState: CartItem[] = [];

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrderToCart (state, action: PayloadAction<CartItem>) {
            state.push(action.payload);
        }, 
        removeOrderFromCart (state, action: PayloadAction<CartItem>) {
            const orderIndexInCart = getOrderIndexInCart(state, action.payload.product);
            state.splice(orderIndexInCart, 1);
        },
        updateOrderInTheCart (state, action: PayloadAction<CartItem>) {
            const orderIndexInCart = getOrderIndexInCart(state, action.payload.product);
            state[orderIndexInCart].quantity = action.payload.quantity;
        }
    }
});

export const { addOrderToCart, removeOrderFromCart, updateOrderInTheCart } = cart.actions;

export default cart.reducer;
