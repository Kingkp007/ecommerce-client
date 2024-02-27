import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    cartItems : [],
}

export const cartSlice = createSlice({ 
    name:'cart',
    initialState,
    reducers: {
        setCartItems : (state, action) => {
            state.cartItems = action.payload.cartItems;
        },
        addToCart: (state, action) => {
            const newProducts = action.payload.products;
            state.cartItems.push(...newProducts);
        },
        removeFromCart: (state, action) => {
            const productIdToRemove = action.payload.cartProdId;
            state.cartItems = state.cartItems.filter(item => item.cartProdId !== productIdToRemove);
        },

    },
})

export const { setCartItems, addToCart,removeFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;


export default cartSlice.reducer;