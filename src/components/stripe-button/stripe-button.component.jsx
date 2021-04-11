import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Eg2bQDZMMj7wepLWduJDCWWAwQEeKNYEjJ2OF9ZxObuU8xuCvenQN0LrlwtoPuLJEWx8GGjDPRDynU48ISEeVkU003fGzceA9';

    const onToken = token => {
        console.log('Token: ', token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;