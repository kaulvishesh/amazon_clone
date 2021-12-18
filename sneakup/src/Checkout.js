import React from 'react'
import "./Checkout.css"
import { UseStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket, user }] = UseStateValue();
    return (
        <div className="checkout">
            <div className="checkout__Left">

                <h3>Hello, {user ? user?.email.split("@")[0] : "Guest"} </h3>
                <h2 className="checkout__Title">Your cart</h2>
                
                {basket.map(item =>
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                )}

            </div>
            <div className="checkout__Right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
