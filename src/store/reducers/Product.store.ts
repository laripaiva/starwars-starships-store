import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/types";

const initialState = {} as Product;

const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectProduct (state, action: PayloadAction<Product>) {
            state = action.payload;
        }, 
    }
});

export const { selectProduct } = product.actions;

export default product.reducer;
