import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J03pmBuJRZmbXGiA99UZAqpY1flBq27L6CvWfEUZF2sCyuFZ7DEGnJ8WGXBQtJP6WNnfVTcRv2ZhtDEze6YPxL100GawDk6SG';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Error', JSON.parse(error));
        alert(
          'Issue with payment. Please use provided credit card information.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-Commerce Store'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
