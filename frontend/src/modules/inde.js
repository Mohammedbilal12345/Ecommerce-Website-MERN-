import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/Product';
import Feature from '../components/Featurecard';
import Stats from '../components/StatGrad';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// Importing product images
import product_1 from '../Assets/product_1.png';
import product_2 from '../Assets/product_2.png';
import product_3 from '../Assets/product_3.png';
import product_4 from '../Assets/product_4.png';
import product_5 from '../Assets/product_5.png';
import product_6 from '../Assets/product_6.png';
import product_7 from '../Assets/product_7.png';
import product_8 from '../Assets/product_8.png';
import product_9 from '../Assets/product_9.png';
import product_10 from '../Assets/product_10.png';
// import product_11 from '../Assets/product_11.png';
// import product_12 from '../Assets/product_12.png';
// import product_13 from '../Assets/product_13.png';
// import product_14 from '../Assets/product_14.png';
// import product_15 from '../Assets/product_15.png';
// import product_16 from '../Assets/product_16.png';
// import product_17 from '../Assets/product_17.png';
// import product_18 from '../Assets/product_18.png';
// import product_19 from '../Assets/product_19.png';
// import product_20 from '../Assets/product_20.png';


const Home = () => {
    const productsData = [
        {
            id: 1,
            title: 'CCTV Complete Set',
            price: 50000,
            description: 'High-definition CCTV camera for home security.',
            image: product_1,
            category: 'Security Systems',
        },
        {
            id: 2,
            title: 'Door Security Sensor',
            price: 1600,
            description: 'Reliable sensor for monitoring door access.',
            image: product_2,
            category: 'Security Systems',
        },
        {
            id: 3,
            title: 'Wireless Security System',
            price: 27000,
            description: 'Complete wireless security system for your home.',
            image: product_3,
            category: 'Security Systems',
        },
        {
            id: 4,
            title: 'Smart  Detectors',
            price: 29500,
            description: 'Advanced smoke detector with app alerts.',
            image: product_4,
            category: 'Safety Systems',
        },
        {
            id: 5,
            title: 'Smart Door Lock',
            price: 16000,
            description: 'Keyless entry smart door lock with remote access.',
            image: product_5,
            category: 'Security Systems',
        },
        {
            id: 6,
            title: 'Pet-Friendly Motion Detectors',
            price: 17000,
            description: 'Motion detector that ignores pets under 50 lbs.',
            image: product_6,
            category: 'Security Systems',
        },
        {
            id: 7,
            title: 'Home Alarm System',
            price: 24900.,
            description: 'Wireless home alarm system with smartphone notifications.',
            image: product_7,
            category: 'Security Systems',
        },
        {
            id: 8,
            title: 'Glass Break Sensor',
            price: 17500,
            description: 'Detects sound of breaking glass for enhanced security.',
            image: product_8,
            category: 'Security Systems',
        },
        {
            id: 9,
            title: ' Smart Security Lock',
            price: 40000.,
            description: '4-channel security camera system with night vision.',
            image: product_9,
            category: 'Security Systems',
        },
        {
            id: 10,
            title: 'Router',
            price:1800,
            description: 'Router for added WI-FI connection.',
            image: product_10,
            category: 'Security Systems',
        },
        // {
        //     id: 11,
        //     title: 'Complete indoor system',
        //     price: 179000.,
        //     description: 'Smart fire alarm system with smoke and CO2 detection.',
        //     image: product_11,
        //     category: 'Safety Systems',
        // },
        // {
        //     id: 12,
        //     title: 'Alert Board',
        //     price: 700.,
        //     description: 'Complete garage security solution with motion sensors.',
        //     image: product_12,
        //     category: 'Security Systems',
        // },
        // {
        //     id: 13,
        //     title: 'Smart Video Doorbell',
        //     price: 1990.,
        //     description: 'Video doorbell with real-time notifications and 2-way audio.',
        //     image: product_13,
        //     category: 'Smart Home Devices',
        // },
        // {
        //     id: 14,
        //     title: 'Flood Detector',
        //     price: 7450.,
        //     description: 'Detects water leaks and floods in your home.',
        //     image: product_14,
        //     category: 'Safety Systems',
        // },
        // {
        //     id: 15,
        //     title: 'Window Security Sensor',
        //     price: 4950.,
        //     description: 'Wireless window sensor with real-time alerts.',
        //     image: product_15,
        //     category: 'Security Systems',
        // },
        // {
        //     id: 16,
        //     title: 'Thermal Camera',
        //     price: 5490.,
        //     description: 'Thermal imaging camera for enhanced surveillance.',
        //     image: product_16,
        //     category: 'Security Systems',
        // },
        // {
        //     id: 17,
        //     title: 'Garage Security Kit',
        //     price: 15000.,
        //     description: 'Complete garage security solution with motion sensors.',
        //     image: product_17,
        //     category: 'Security Systems',
        // },
        // {
        //     id: 18,
        //     title: 'Personal Safety Alarm',
        //     price: 2950.,
        //     description: 'Personal alarm device for safety on the go.',
        //     image: product_18,
        //     category: 'Personal Safety',
        // },
        // {
        //     id: 19,
        //     title: 'Outdoor Security Light',
        //     price: 79000.,
        //     description: 'Bright LED light with motion detection for outdoor security.',
        //     image: product_19,
        //     category: 'Security Systems',
        // },
        // {
        //     id: 20,
        //     title: 'Security Lockbox',
        //     price: 8900.,
        //     description: 'Lockbox for secure storage of keys and valuables.',
        //     image: product_20,
        //     category: 'Home Security',
        // },
        // Continue with remaining products up to 35
    ];

    return (
        <div>
            <Header />
            <Hero />
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
            </div>
            <ProductGrid products={productsData} />
            <Feature />
            <Stats />
            <Footer />
        </div>
    );
};

export default Home;
