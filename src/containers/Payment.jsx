import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useNavigate();
  const paypalOptions = {
    clientId: 'AeBTMWx790YCHwHc3xlXkDingpefTzNQnHktABWqr28eblsFpzLqxPFACzyZOXzh4DyYwBROzTv8_Far',
    intent: 'capture',
    currency: 'USD'
  }
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleSumTotal = () => {
    const reducer = (acc, cur) => acc + cur.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history('/checkout/success');
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  )
}

export default Payment;