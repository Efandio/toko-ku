import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import productsSlice from "./slice/productsSlice"
import cartSlice from "./slice/cartSlice"
import favoriteSlice from "./slice/favoriteSlice"

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        products: productsSlice,
        cart: cartSlice,
        favorite: favoriteSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch