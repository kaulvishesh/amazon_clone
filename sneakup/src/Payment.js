import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { UseStateValue } from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';
function Payment() {
    const [{basket, user},dispatch] = UseStateValue();
    const history= useHistory();
    const stripe = useStripe();
    const Elements = useElements();
    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret]= useState(true);
    useEffect(() => {

        const getClientSecret =async () =>{
            const response = await axios ({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log('The Secret is>>>',clientSecret)

    const handleSubmit= async (event) =>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method: {
                card : Elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db.collection('users').doc(user?.uid)
            .collection('orders').doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setProcessing(false);
            setError(null);
            history.replace('/orders')
            dispatch({
                type:"EMPTY_BASKET"
            })

        })

    }
    const handleChange = async event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/Checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Baddi</p>
                        <p>HP,India</p>
                    </div>

                </div>
                <div className="payment__section">
                <div className="payment__title">
                        <h3>Review your order</h3>
                    </div>
                    <div className="payment__items">
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
                </div>
                <div className="payment__section">
                    <div className="payment__items">
                        <h3>Payment methods</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                            <button disabled={ processing || disabled ||succeeded}>
                                <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
