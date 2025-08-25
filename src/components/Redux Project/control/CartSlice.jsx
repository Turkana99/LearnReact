import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity:0,
    total:0
}

const CartSlice = createSlice({
    name:'cart',
    initialState,
})

console.log(CartSlice);


export default CartSlice.reducer;