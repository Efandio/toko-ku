import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductsType } from "../../types/ProductType";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (build) => ({
        getProducts: build.query<ProductsType[], void>({
            query: () => 'products'
        }),
        getProductsById: build.query<ProductsType, number>({
            query: (id) => `products/${id}`
        }),
    })
})

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi