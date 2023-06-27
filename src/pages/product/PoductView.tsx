import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { StarRating } from "../../components/StarRating";
import { Product } from "../../utils/inerfaces";
import { RootState } from "../../app/features/store";

const PoductView = () => {
  const params = useParams();
  const { products } = useSelector((state: RootState) => state.app);
  const { id } = params;

  const foundProduct: Product | undefined = products.find(
    (item: Product) => item.id === Number(id)
  );

  const { title, image, description, price, rating, category } =
    foundProduct ?? {
      title: "",
      image: "",
      description: "",
      price: 0,
      rating: { rate: 0, count: 0 },
      category: "",
    };
  return (
    <>
      <div className="cart-title">
        <Link to="/">{`Back`}</Link>
      </div>
      <div className="product-view">
        <div className="product-view-content">
          <div className="card-content">
            <div className="card-content-img">
              <img src={image} className="card-img" alt={title} />
            </div>
            <div>
              <h3> {title} </h3>
              <h4 style={{ textTransform: "capitalize" }}>{category}</h4>
              <p className="card-description">{description}</p>
              <h3>₹ {price}</h3>
              <StarRating rate={rating.rate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoductView;
