import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './modules/inde';
import ProductPage from './modules/ProductPage';
import Products from './modules/Products';
import Categories from './components/Category/Categories';
import Cart from './modules/Cart';
import AboutUs from './modules/About';
import ContactUs from './modules/contact';
import PaymentPage from './modules/payment';
import Login from './modules/Loginpage/login';
import Signup from './modules/sign/signup';
import Dashboard from './modules/Dashboard/DashBoard';
import Profile from './components/Profile/ProfileUser';
import ProtectedRoute from './modules/Protect/ProtectedRoute';

// Import fallback product data
import { products as fallbackProducts } from './data';

function App() {
  const [products, setProducts] = useState(fallbackProducts);
  const amount = 500; // Replace with dynamic cart amount later if needed

  useEffect(() => {
    axios.get('https://ecommerce-website-mern-1-r2ss.onrender.com/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err.message);
        // fallbackProducts will continue to show if backend fails
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories products={products} />} />
      <Route path="/product/:id" element={<ProductPage products={products} />} />
      <Route path="/products" element={<Products products={products} />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />

      {/* Filtered product categories */}
      <Route path="/indoor-security" element={<Products products={products.filter(product => product.category === 'Indoor Security')} />} />
      <Route path="/outdoor-security" element={<Products products={products.filter(product => product.category === 'Outdoor Security')} />} />
      <Route path="/smart-security" element={<Products products={products.filter(product => product.category === 'Smart Security')} />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/postdata" element={<div>Postdata page</div>} />
      <Route path="/payment" element={<PaymentPage amount={amount} />} />
    </Routes>
  );
}

export default App;
