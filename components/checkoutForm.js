import React from 'react';
import { ElementsConsumer, PaymentElement, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { PlaceOrder } from '../redux/action/cart';


const CheckoutForm = ({ stripe, elements }) => {
  const dispatch = useDispatch()
  const Cart = useSelector(state => state.cart.CartData);

  const GetTotalPrice = () => {
    let total = 0
    for (let i = 0; i < Cart.length; i++) {
      total = total + (Number(Cart[i].price) * Number(Cart[i].quantity))
    }

    const gst = total * 18 / 100
    const subtotal = total + gst

    return {
      total: total,
      gst: gst,
      subtotal: subtotal
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://grogrip.com/home",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      const payload = {
        cart: Cart,
        orderValue: GetTotalPrice().total
      }
      dispatch(PlaceOrder(payload))
    }
  };

  return (
    <form className='flex flex-col h-screen items-center justify-center navbarbg' onSubmit={handleSubmit}>
      <div className='bg-white flex flex-col items-center p-[50px] rounded-lg' >
        <PaymentElement
        />
        <button className='bg-green-500 text-white font-semibold px-[10px] py-[5px] rounded-md  mt-[20px] ' disabled={!stripe}>Submit</button>
      </div>
    </form>
  )
}

// class CheckoutForm extends React.Component {

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const { stripe, elements } = this.props;
//     if (!stripe || !elements) {
//       return;
//     }
//     const result = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: "https://example.com/order/123/complete",
//       },
//     });

//     if (result.error) {
//       console.log(result.error.message);
//     } else {

//     }
//   };


//   render() {
//     return (
//       <form className='flex flex-col h-screen items-center justify-center navbarbg' onSubmit={this.handleSubmit}>
//         <div className='bg-white flex flex-col items-center p-[50px] rounded-lg' >
//           <PaymentElement
//           />
//           <button className='bg-green-500 text-white font-semibold px-[10px] py-[5px] rounded-md  mt-[20px] '  disabled={!this.props.stripe}>Submit</button>
//         </div>
//       </form>
//     );
//   }
// }

export default function InjectedCheckoutForm() {

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  )
}
