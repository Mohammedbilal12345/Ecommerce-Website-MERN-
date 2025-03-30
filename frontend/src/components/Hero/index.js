import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Safeguard What Matters
            <br className="hidden lg:inline-block" /> with Advanced Security
          </h1>
          <p className="mb-8 leading-relaxed">
            Protect your home and business with our cutting-edge security solutions. From real-time surveillance to remote access and alerts, we provide everything you need to secure your peace of mind.
          </p>
          <div className="w-full bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Explore Our Products</h2>
            <p className="text-gray-700 mb-4">Discover our range of products designed to protect what you value most.</p>
            <Link to="/products" className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              View Products
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://prowire.us/wp-content/uploads/2023/03/best-small-business-security-systems.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
