import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit/react";
import type { ProductsType } from "@/types/ProductType";

export interface Products {
    items: ProductsType[];
};

const initialState: Products = {
    items: []
};

console.log(initialState)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductsType[]>) => {
            state.items = action.payload;
        },
        searchProducts: (state, action: PayloadAction) => {},
        randomProductsRender: (state, action: PayloadAction) => {},
        filterProductsCategory: (state, action: PayloadAction) => {},
        filterProductsPrice: (state, action: PayloadAction) => {},
        filterProductsRating: (state, action: PayloadAction) => {},
    }
})

export const { setProducts, searchProducts, randomProductsRender, filterProductsCategory, filterProductsPrice, filterProductsRating } = productsSlice.actions

export default productsSlice.reducer