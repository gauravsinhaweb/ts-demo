import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/features/store";
import { Product } from "../../utils/inerfaces";

const Cart = () => {
  interface CartItem extends Product {
    quantity: number;
  }

  const { cart } = useSelector((state: RootState) => state.app);
  const [cartItem, setCartItem] = useState<any[] | any>(cart);

  if (!cart.length) {
    return (
      <div className="cart-title">
        <p> {`Your Cart is empty :/`}</p>
      </div>
    );
  }

  function handlerAddQuantity(id: number) {
    const item = cartItem.map((item: CartItem) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItem(item);
  }

  function handlerDescQuantity(id: number) {
    setCartItem(
      cartItem.map((item: CartItem) =>
        item.id === id
          ? item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
          : item
      )
    );
  }

  return (
    <>
      <div className="cart-title">
        <p> {`Cart Items: (${cartItem.length}) `}</p>
      </div>

      <div className="product-listing">
        {cartItem &&
          cartItem.map(
            ({
              id = 0,
              title = "",
              image = "",
              description = "",
              price = 0,
              quantity = 0,
              rating = null,
              category = "",
            }) => {
              return (
                <div key={id} className="card">
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
                          onClick={() => handlerAddQuantity(id)}
                        >
                          +
                        </button>
                        <p>{quantity}</p>
                        <button
                          className="btn"
                          onClick={() => handlerDescQuantity(id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}{" "}
      </div>
    </>
  );
};

export default Cart;
