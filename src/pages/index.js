import { useState, useEffect } from "react";
import ProductCard from "@/components/Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0); // Total number of products
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10; // Number of products per page

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const skip = (currentPage - 1) * limit;
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await res.json();
    setProducts(data.products);
    setTotal(data.total);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(total / limit)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className=" flex items-center justify-center text-4xl font-bold">CART APP</h1>
      <div className="grid grid-cols-2 xs:grid-col-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`py-2 px-4 border rounded-l-lg ${
            currentPage === 1 ? "bg-gray-200" : "bg-gray-600 text-white"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 border-t border-b">{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(total / limit)}
          className={`py-2 px-4 border rounded-r-lg ${
            currentPage === Math.ceil(total / limit)
              ? "bg-gray-200"
              : "bg-gray-600 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
