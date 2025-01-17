import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Added BrowserRouter as Router
import Home from './modules/inde';
import ProductPage from './modules/ProductPage';
import Products from './modules/Products';
import Categories from './components/Category/Categories'
import Cart from './modules/Cart';
import AboutUs from './modules/About';
import ContactUs from './modules/contact';
import PaymentPage from './modules/payment';
import Login from './modules/Loginpage/login';
import Signup from './modules/sign/signup';
import Dashboard from'./modules/Dashboard/DashBoard';
import Profile from './components/Profile/ProfileUser';
// Import the ProtectedRoute component
import ProtectedRoute from './modules/Protect/ProtectedRoute'; // Ensure "Login" matches the folder name
 // Ensure 'ProtectedRoute' matches the file casing
import { products } from './data';

function App() {
  const amount = 500; // Example amount, replace this with dynamic value from your cart

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories products={products} />} />
        
        {/* Dynamic route for each product */}
        <Route path="/product/:id" element={<ProductPage products={products} />} />
        <Route path="/products" element={<Products products={products} />} />
        
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        
        <Route path="/indoor-security" element={<Products products={products.filter(product => product.category === 'Indoor Security')} />} />
        <Route path="/outdoor-security" element={<Products products={products.filter(product => product.category === 'Outdoor Security')} />} />
        <Route path="/smart-security" element={<Products products={products.filter(product => product.category === 'Smart Security')} />} />
        
        <Route path="/cart" element={<Cart />} />
        
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>}/>
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute> {/* Protected route to ensure only authenticated users can access */}
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/postdata" element={<div>Postdata page</div>} /> 
        
        <Route path="/payment" element={<PaymentPage amount={amount} />} />
      </Routes>
    
  );
}
export default App;
