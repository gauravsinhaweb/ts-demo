import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCart } from "../../app/features/appSlice";
import { objectDeepClone } from "../../utils/helper";
import { RootState } from "../../app/features/store";
import { Product } from "../../utils/inerfaces";

const ProductListing = () => {
  const { products, cart } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerAddItemToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    const isItemInCart = cart.find((item: Product) => item.id === id);
    if (!isItemInCart) {
      const items = products.find((item: Product) => item.id === id);
      const _items = objectDeepClone(items);
      _items["quantity"] = 1;
      dispatch(setCart({ items: _items, type: "add" }));
    } else {
      alert("Item already present");
    }
  };
  const handlerRemoveItemToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    dispatch(setCart({ id: id, type: "remove" }));
  };
  if (!products.length) return <div className="loader">No Product found</div>;

  return (
    <div className="product-listing">
      {products.map(
        ({ id, title, image, description, price, rating, category }) => (
          <div
            onClick={() => navigate(`/product/${id}`)}
            key={id}
            className="card"
          >
            <div className="card-content">
              <div className="card-content-img">
                <img src={image} className="card-img" alt={title} />
              </div>
              <div>
                <h3> {title} </h3>
                <p className="card-description">{description}</p>
                <h4>₹ {price}</h4>
                <div className="btn-group">
                  <button
                    className="btn"
                    onClick={(e) => handlerAddItemToCart(e, id)}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn"
                    onClick={(e) => handlerRemoveItemToCart(e, id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductListing;
