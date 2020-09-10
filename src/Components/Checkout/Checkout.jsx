import React from "react";
import "./Checkout.css";
import Subtotal from "./../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import FlipMove from "react-flip-move";

const Checkout = () => {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h3>Hello, {!user ? "Guest" : user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.length === 0 ? <h2>Your shopping Basket is Empty</h2> : null}
          <FlipMove>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
