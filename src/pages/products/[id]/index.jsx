import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { useState } from "react";

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1)


  const cart = useSelector((store) => store.cart.items);
  console.log(cart)
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Before dispatch", cart); // Log before dispatch
    dispatch(addToCart({
      id: product.id,
      thumbnail: product.thumbnail,
      name: product.title,
      quantity: quantity
    }));
    console.log("After dispatch", cart); // Log after dispatch
  };
  


  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrease = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg border border-gray-300 rounded-lg my-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              className="object-cover rounded-lg mt-4"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
            <h1 className="text-3xl font-semibold text-gray-800">{product.title}</h1>
            <p className="text-lg text-gray-500 mt-2">{product.category}</p>
            <p className="text-xl font-semibold text-gray-900 mt-4">${product.price}</p>
            <p className="text-lg text-gray-700 mt-4">{product.description}</p>
            <div className="flex items-center justify-center">
            <button
              className="mt-6 w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
              onClick={handleDecrease}
            >-</button>
            <span className="px-4">{quantity}</span>
            <button
              className="mt-6 w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
              onClick={handleIncrease}
            >+</button>
            <button
              onClick={handleAddToCart}
              className="mt-6 mx-4 w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Add to Cart 
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return { props: { product } };
}
