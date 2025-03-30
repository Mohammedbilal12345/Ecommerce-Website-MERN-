


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QHznjGAcdDKNlMmnSSk2odsWYW5sJpUK1181T0uD1QQZxA9IuwGvrqGDnQL1TAYREgcOoAyDnZh3dH8mu6zW2XM00kRnsR4Vt');

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [shipping, setShipping] = useState(10);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  useEffect(() => {
    // Update localStorage whenever cartItems changes
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    // Remove item by filtering it out
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const handleIncrementQuantity = (id) => {
    // Increment item quantity
    setCartItems((prevItems) =>
      prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const handleDecrementQuantity = (id) => {
    // Decrement item quantity, but prevent going below 1
    setCartItems((prevItems) =>
      prevItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    );
  };

  const handleContinueShopping = () => {
    // Redirect to products page
    navigate("/products");
  };

  const applyPromoCode = () => {
    // Set promo discounts
    const promoDiscounts = {
      SAVE10: 10,
      SAVE20: 20, // Add more promo codes as needed
    };
    if (promoDiscounts[promoCode]) {
      setDiscount(promoDiscounts[promoCode]);
      setPromoMessage('Promo code applied successfully!');
    } else {
      setDiscount(0);
      setPromoMessage('Invalid promo code.');
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = (subtotal + shipping - discount).toFixed(2);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Add shipping as a line item
    lineItems.push({
      price_data: {
        currency: 'inr',
        product_data: {
          name: 'Shipping',
        },
        unit_amount: Math.round(shipping * 100),
      },
      quantity: 1,
    });

    try {
      const response = await fetch('http://localhost:4000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lineItems }),
      });

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error creating Stripe checkout session:", error);
      alert("An error occurred during checkout. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row shadow-lg my-10 rounded-lg overflow-hidden">
          {/* Cart Items Section */}
          <div className="w-full md:w-3/4 bg-white px-6 py-8">
            <div className="flex justify-between border-b pb-8 mb-6">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-xl">{cartItems.length} Items</h2>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="flex flex-col md:flex-row items-center hover:bg-gray-100 py-6 border-b" key={item.id}>
                  <div className="flex w-full md:w-2/5 items-center">
                    <img className="w-20 h-20 md:w-24 md:h-24 rounded-md object-cover" src={item.image} alt={item.title} />
                    <div className="flex flex-col ml-4 flex-grow text-center md:text-left">
                      <span className="font-semibold text-sm">{item.title}</span>
                      <span className="text-gray-500 text-xs">{item.category}</span>
                      <button onClick={() => handleRemoveItem(item.id)} className="font-semibold text-white-500 text-xs mt-2 hover:text-white-700">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center w-full md:w-1/5 mt-2 md:mt-0">
                    <button onClick={() => handleDecrementQuantity(item.id)} className="text-gray-600 text-lg">-</button>
                    <span className="mx-2 border text-center w-8">{item.quantity}</span>
                    <button onClick={() => handleIncrementQuantity(item.id)} className="text-gray-600 text-lg">+</button>
                  </div>
                  <div className="text-center w-full md:w-1/5 font-semibold text-sm mt-2 md:mt-0">₹{item.price.toFixed(2)}</div>
                  <div className="text-center w-full md:w-1/5 font-semibold text-sm mt-2 md:mt-0">₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))
            ) : (
              <div className="flex justify-center py-10">
                <span className="text-gray-500">Your cart is empty</span>
              </div>
            )}

            {/* Cart Summary and Continue Shopping */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t">
              <button onClick={handleContinueShopping} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mb-4 md:mb-0">
                ← Continue Shopping
              </button>
              <div className="flex items-center">
                <span className="text-sm font-semibold">Total cost</span>
                <span className="text-lg font-bold ml-4">₹{total}</span>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div id="summary" className="w-full md:w-1/4 px-6 py-10 bg-gray-100">
            <h1 className="font-semibold text-xl mb-6">Order Summary</h1>

            <div className="flex justify-between mb-5">
              <span className="font-semibold text-sm">Items ({cartItems.length})</span>
              <span className="font-semibold text-sm">₹{subtotal.toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="mb-5">
              <label className="font-medium text-sm block mb-2">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm rounded-md" onChange={(e) => setShipping(Number(e.target.value))}>
                <option value={10}>Standard shipping - ₹10.00</option>
                <option value={20}>Express shipping - ₹20.00</option>
              </select>
            </div>

            {/* Promo Code */}
            <div className="mb-5">
              <label className="font-medium text-sm block mb-2">Promo Code</label>
              <input
                type="text"
                placeholder="Enter your code"
                className="p-2 text-sm w-full rounded-md border"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div>
            <button onClick={applyPromoCode} className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase w-full rounded-md mb-4">
              Apply
            </button>
            {promoMessage && <p className="text-sm text-green-500">{promoMessage}</p>}

            {/* Checkout */}
            <div className="border-t pt-6">
              <div className="flex justify-between py-2">
                <span className="font-semibold text-sm">Total</span>
                <span className="font-semibold text-sm">₹{total}</span>
              </div>
              <button onClick={handleCheckout} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 w-full rounded-md mt-6">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
