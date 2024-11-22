const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: []
  };
  const getInitialState = () => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("carts");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  };
  

  const cartSlice = createSlice({
    name: "cart",
    initialState: { items: getInitialState() }, // Use dynamic initialization here
    reducers: {
      addToCart: (state, action) => {
        const { id, quantity, name, thumbnail } = action.payload;
        const indexId = state.items.findIndex((item) => item.id === id);
        if (indexId >= 0) {
          state.items[indexId].quantity += quantity;
        } else {
          state.items.push({ id, quantity, name, thumbnail });
        }
        // Update localStorage with new cart items
        localStorage.setItem("carts", JSON.stringify(state.items));
      },
      removeFromCart: (state, action) => {
        const id = action.payload;
      
        // Update the state
        state.items = state.items.filter((item) => item.id !== id);
      
        // Update localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("carts", JSON.stringify(state.items));
          console.log("Updated localStorage: ", localStorage.getItem("carts")); // Debug output
        }
      },
      
      increaseQuantity: (state, action) => {
        const id = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity += 1;
        }
        localStorage.setItem("carts", JSON.stringify(state.items));
      },
      decreaseQuantity: (state, action) => {
        const id = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
        localStorage.setItem("carts", JSON.stringify(state.items));
      }
    }
  });
  

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
