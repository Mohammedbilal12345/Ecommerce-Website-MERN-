import React from 'react';
import ProductGrid from '../../components/Product';
import Feature from '../../components/Featurecard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Products = ({ products }) => {
  return (
    <div>
      <Header />
      <Feature />
      
      {/* Main Heading for Security Systems */}
      <div className="text-center py-10 bg-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-800">Explore Our Comprehensive Security Systems</h1>
        <p className="text-1g  mt-4">Safeguard your home and business with top-of-the-line security solutions. Choose from a variety of indoor, outdoor, and smart security products designed to offer peace of mind.</p>
      </div>

      {/* Section Heading for All Products */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800">All Products</h2>
        <p className="text-gray-600 mt-2">Browse through our range of security solutions to find the perfect match for your safety needs.</p>
      </div>

      <ProductGrid products={products} /> {/* Pass products to ProductGrid */}

      <Footer />
    </div>
  );
};

export default Products;
