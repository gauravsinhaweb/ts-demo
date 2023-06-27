import React, { useEffect, useState } from "react";
import ProductListing from "./product/ProductListing";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../app/features/appSlice";
import { debounceFn } from "../utils/helper";
import { RootState } from "../app/features/store";
import { Product } from "../utils/inerfaces";

const ProductAPI = `https://fakestoreapi.com/products`;

const Hero = () => {
  const { products } = useSelector((state: RootState) => state.app);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handlerFetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(ProductAPI);
      const data = await res.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.error("error in fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handlerFetchProducts();
  }, []);

  const handlerSearch = (e: string) => {
    const text = e.toLowerCase();
    if (products) {
      const _products = products.filter((item: Product) =>
        item.title?.toLowerCase()?.includes(text)
      );
      dispatch(setProducts(_products));
    }
    if (e === "") {
      handlerFetchProducts();
    }
  };
  if (isLoading) return <p className="loader">Loading...</p>;
  return (
    <div className="hero">
      <Search onSearch={debounceFn(handlerSearch)} />
      <ProductListing />
    </div>
  );
};

export default Hero;
