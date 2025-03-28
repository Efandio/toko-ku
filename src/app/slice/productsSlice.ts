import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit/react";
import type { ProductsType } from "@/types/ProductType";

export interface Products {
    items: ProductsType[];
};

const initialState: Products = {
    items: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductsType[]>) => {
            state.items = action.payload;
        },

        filterProductsCategory: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(products => products.category === action.payload)
        },

        filterProductsPrice: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(products => products.price === action.payload)
        },
        
        filterProductsRating: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(products => products.rating.rate === action.payload)
        },
    }
})

export const { setProducts, filterProductsCategory, filterProductsPrice, filterProductsRating } = productsSlice.actions

export default productsSlice.reducer