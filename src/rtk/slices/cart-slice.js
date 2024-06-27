import { createSlice } from "@reduxjs/toolkit";
import Products from "../../components/Products";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers:{
    addToCart: (state, action)=>{
      state.push(action.payload);
    },
    deleteFormcart: (state,action)=>{
      return state.filter((product)=> product.id !== action.payload.id)
    },
    clear: (state,action)=>{
      return [];
      
    },
  }
})

export const {addToCart,deleteFormcart,clear} = cartSlice.actions;
export default cartSlice.reducer;
