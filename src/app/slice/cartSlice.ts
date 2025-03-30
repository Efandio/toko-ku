import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartType } from "@/types/CartStype";

interface Cart {
    items: CartType[]
};

    // variable for cart storage
const cartString = localStorage.getItem('cart');
const initialState: Cart = {
        // ternary operator for returning string to object
    items: cartString ? JSON.parse(cartString) : []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartType>) => {
            const index = state.items.findIndex(a => a.id === action.payload.id);
            
            if (index === -1) {
                // if items !, then add items
                state.items.push(action.payload)
            } else {
                // if items already, quantity ++
                state.items[index].quantity += action.payload.quantity
            }

            // set to local storage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeProducts: (state, action: PayloadAction<number>) => {
            const remove = state.items.filter((a) => a.id !== action.payload)
            state.items = remove
            console.log(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        }
    }
});

export const { setCart, removeProducts } = cartSlice.actions
export default cartSlice.reducer