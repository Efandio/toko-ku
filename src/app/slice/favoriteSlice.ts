import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FavoriteType } from "@/types/FavoriteType";

interface FavoriteState {
    items: FavoriteType[];
};

const getFavorite = localStorage.getItem('favorite');
const initialState: FavoriteState = {
    items: getFavorite ? JSON.parse(getFavorite) : []
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setFavoriteItems: (state, action: PayloadAction<FavoriteType>) => {
            state.items.push(action.payload);
            localStorage.setItem('favorite', JSON.stringify(state.items));
        },
        removeFavoriteItems: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(a => a.id === action.payload);
            if (index !== -1) {
                state.items = state.items.filter(a => a.id !== action.payload);
            }
            localStorage.setItem('favorite', JSON.stringify(state.items));
        },
    }
})

export const { setFavoriteItems, removeFavoriteItems } = favoriteSlice.actions;
export default favoriteSlice.reducer;