import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) =>{
            state.cartItems = []
            state.amount = 0
            state.total = 0
        },
        addToCart(state, action) {
            const payload = action.payload;
            const product = payload[1]
            const amountOfItem = payload[0]
            const existingItem = state.cartItems.find((item) => item.ref === product.ref);
      
            if (existingItem) { 
              if (existingItem.quantity + amountOfItem > product.stock){
                return
              } else {
                existingItem.quantity += amountOfItem
                existingItem.totalPrice += amountOfItem*product.price
                state.amount += amountOfItem
                state.total += amountOfItem*product.price;
              }
             
            } else {
                state.cartItems.push({
                  ...product,
                  quantity: amountOfItem,
                  totalPrice: amountOfItem*product.price,
                })
                state.amount += amountOfItem
                state.total += amountOfItem*product.price;
            }      
          },
          removeItem(state, action) {
            const product = action.payload
            const newList = state.cartItems.filter((item)=>{
                return item.ref !== product.ref
            })
            state.cartItems = newList
            state.amount -= product.quantity
            state.total -= product.totalPrice
          },
          removeOne(state, action) {
            const product = action.payload
            if (product.quantity === 1){
                const newList = state.cartItems.filter((item)=>{
                    return item.ref !== product.ref
                })
                state.cartItems = newList
                state.amount -= product.quantity
                state.total -= product.totalPrice
            } else {
                state.amount -= 1 
                state.total -= product.price
                const currentItem = state.cartItems.find(item => item.ref === product.ref);
                currentItem.quantity -= 1
                currentItem.totalPrice -= currentItem.price     
            }
          },
          addOne(state, action){
            const product = action.payload
            const currentItem = state.cartItems.find(item => item.ref === product.ref);
            if ( product.quantity >= currentItem.stock){
            } else {
                state.amount += 1 
                state.total += product.price
                currentItem.quantity += 1
                currentItem.totalPrice += currentItem.price 
            }        
          },
    }
})

export const { addToCart, clearCart, removeItem, removeOne, addOne, } = cartSlice.actions;
export default cartSlice.reducer