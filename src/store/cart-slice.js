import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: newitem.quantity,
          totalprice: newitem.price,
          name: newitem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice + newitem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !==existingItem.id 
        );
        state.items.map((item)=>console.log(item.id));
      } else {
        state.items.map((item)=>console.log(item.id));
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
