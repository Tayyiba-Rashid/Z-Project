import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CartList() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

  

    const handleClearCart = () => {
        localStorage.removeItem("carts"); // Remove only the cart data
        window.location.reload(); // Refresh to update the UI
    };

    const idhandleRemove = (id) => {
        // Retrieve the cart data from localStorage
        const cartData = JSON.parse(localStorage.getItem("carts")) || [];

        // Filter out the item with the matching id
        const updatedCart = cartData.filter((item) => item.id !== id);

        // Update localStorage with the filtered cart
        localStorage.setItem("carts", JSON.stringify(updatedCart));

        // Optionally, update your Redux state to reflect the change
        dispatch(removeFromCart(id)); // Assuming you have a Redux action for this
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={item.id} className="flex items-center justify-between py-4 border-b border-gray-300">
                            {/* Product Image */}
                            <img
                                className="w-20 h-20 object-cover rounded-lg"
                                src={item.thumbnail}
                                alt={item.name}
                            />

                            {/* Product Details */}
                            <div className="flex-1 ml-4">
                                <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center">
                                <button
                                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                    onClick={() => handleDecrease(item.id)}
                                >
                                    -
                                </button>
                                <span className="mx-2 text-lg font-semibold text-gray-700">{item.quantity}</span>
                                <button
                                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                    onClick={() => handleIncrease(item.id)}
                                >
                                    +
                                </button>
                            </div>
                            

                            <button
                                className="ml-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-red-500 transition duration-300"
                                onClick={() => idhandleRemove(item.id)} // Pass the item's id to handleRemove
                            >
                                Remove
                            </button>


                        </li>

                    ))}
                </ul>
            )}

            <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>

        </div>
    );
}
