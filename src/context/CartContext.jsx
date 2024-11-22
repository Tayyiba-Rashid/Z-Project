// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export default function CartProvider({children}){
//     const [cart, setCart] = useState([])

//     const addToCart = (product) =>
//         setCart([...cart, product])

//     const removeFromCart = (id) =>  setCart(cart.filter((item) => item.id !== id))
//     // const addToCart = (product) => {
//     //     setCart(prevCart => [...prevCart, product]);
//     // };
    
//     // const removeFromCart = (id) => {
//     //     setCart(prevCart => prevCart.filter(item => item.id !== id));
//     // };
    


    
// return(
//     <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
//         {children}        
//     </CartContext.Provider>
// )


// }

