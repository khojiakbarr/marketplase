import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/${product._id}`}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" overflow-hidden h-[250px] m-5 rounded">
          <img
            className="transition-all duration-150 hover:scale-110"
            src={`http://localhost:8080/${product.images[0].path}`}
            alt={product.images[0].originalname}
          />
        </div>
        <div className="px-[20px] pb-[20px]">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>

          <div className="flex items-center justify-between mt-[20px]">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.price}$
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
