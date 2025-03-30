import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartType } from "@/types/CartStype";
import { toast } from "sonner";

interface Cart {
    items: CartType[]
};

    // variable for cart storage
const cartString = localStorage.getItem('cart');
const initialState: Cart = {
        //  returning string to object
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
                state.items.push(action.payload);
            } else {
                // if items already, quantity ++
                state.items[index].quantity += action.payload.quantity;
            }

            // set to local storage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeProducts: (state, action: PayloadAction<number>) => {
            // removing by action (id)
            state.items = state.items.filter((a) => a.id !== action.payload);
            // update localStorage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        addQuantiy: (state, action: PayloadAction<number>) => {
            const quant = state.items.findIndex(a => a.id === action.payload);

            if (quant !== -1) {
                state.items[quant].quantity += 1;
            };

            // update localStorage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        reduceQuantity: (state, action: PayloadAction<number>) => {
            const quant = state.items.findIndex(a => a.id === action.payload);

            if (quant !== -1) {
                // quantity decrement
                state.items[quant].quantity -= 1;

            } if (state.items[quant].quantity <= 0) {
                // remove item is quantity below 1
                state.items = state.items.filter(a => a.id !== action.payload);
                toast('Product Deleted');
            }

            // update localStorage
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
    }
});

export const { setCart, removeProducts, addQuantiy, reduceQuantity } = cartSlice.actions;
export default cartSlice.reducer;