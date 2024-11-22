import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <Link href={`/products/${product.id}`}
        >
            <div className="max-w-60 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                <div className='flex items-center justify-center border border-gray-100'>
                <img
                    className=" size-44 object-cover"
                    src={product.thumbnail}
                    alt={product.title}
                />
                </div>
                <div className="p-4 bg-gray-100 min-h-24">
                    <h2 className="text-base font-semibold text-gray-700 h-14 truncate text-wrap">{product.title}</h2>
                    <p className="text-gray-500 mt-1">${product.price}</p>
                </div>
            </div>



        </Link>

    );
};

export default ProductCard;