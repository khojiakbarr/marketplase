import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Store/Thunks/GetProductThunk";
import ProductCard from "../components/ProductCard";

export default function Home() {
  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, []);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.Loading);
  const error = useSelector((state) => state.product.error);

  return (
    <div className="container">
      <h1 className="text-[30px]">Products</h1>
      {loading === "pending" && <h2>Loading...</h2>}
      {error && <h2>Error: {error} </h2>}
      <div className="flex gap-[30px] flex-wrap">
        {products.products &&
          products.products.map((prod) => (
            <ProductCard key={prod._id} product={prod} />
          ))}
      </div>
    </div>
  );
}
