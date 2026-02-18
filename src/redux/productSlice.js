import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    product: JSON.parse(localStorage.getItem("product")) ||[],
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    loading: null,
    error: null,
  },
  reducers: {
    addProduct:(state,action)=>{
      state.product.push(action.payload)
      localStorage.setItem("product",JSON.stringify(state.product))
    },
    updateProduct:(state,action)=>{
     const productItemFind = state.product.findIndex((item)=>(item.id === action.payload.id))
        console.log(productItemFind);
        
     if (productItemFind !==-1 ) {
      state.product[productItemFind] = action.payload;
      localStorage.setItem("product",JSON.stringify(state.product))
     }
    },
    //cartItem quantity increment and add cart page
    addCartItems: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (findItem !== -1) {
        state.cartItems[findItem].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    pulsCartItems: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.id == action.payload
      );

      if (findItem !== -1) {
        state.cartItems[findItem].quantity++;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    minusButton:(state,action)=>{
      const findItem = state.cartItems.findIndex((item)=>(
        item.id === action.payload      ))
      
        if (findItem !==-1) {
          state.cartItems[findItem].quantity--;
        }
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    removeCartItems:(state,action)=>{
      const findItem = state.cartItems.findIndex((item)=>(
        item.id === action.payload.id
      ))

      if (findItem !==-1) {
        state.cartItems.splice(findItem,1)
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
      }
    },
    removeProductItems:(state,action)=>{
      const findItem = state.product.findIndex((item)=>(
        item.id === action.payload.id
      ))

      if (findItem !==-1) {
        state.product.splice(findItem,1)
        localStorage.setItem("product",JSON.stringify(state.product))
      }
    }
     

     
    }
  },
);

export default productSlice.reducer;
export const { addCartItems, pulsCartItems,minusButton,removeCartItems,addProduct,updateProduct,removeProductItems} = productSlice.actions;
