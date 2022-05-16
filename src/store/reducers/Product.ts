import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/types";

const initialState: Product = {
    name: "",
    model: "",
    manufacturer: "",
    cost_in_credits: "",
    length: "",
    max_atmosphering_speed: "",
    crew: "",
    passengers: "",
    cargo_capacity: "",
    consumables: "",
    hyperdrive_rating: "",
    MGLT: "",
    starship_class: "",
    pilots: [],
    films: [],
    created: "",
    edited: "",
    url: ""
};


const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectProduct (state, action: PayloadAction<Product>) {
            state = Object.assign(state, action.payload);
        }, 
    }
});

export const { selectProduct } = product.actions;

export default product.reducer;
