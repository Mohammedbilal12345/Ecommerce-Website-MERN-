import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-5 text-indigo-800">About Us</h1>
        <p className="text-center text-gray-700 text-lg mb-10">
          We are dedicated to providing state-of-the-art security solutions to safeguard your home, business, and loved ones.
        </p>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to deliver reliable and innovative security systems that provide peace of mind for our clients. 
            Through excellence in service and cutting-edge technology, we strive to exceed expectations and set new industry standards.
          </p>
        </div>

        {/* Company History Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Our Journey</h2>
          <p className="text-gray-700">
            Established in 2005, we began as a small team with a big vision: to redefine security solutions. Over the years, we’ve grown into a trusted provider with a commitment to innovation and client satisfaction. Our expertise has helped us secure numerous homes and businesses, and we continue to expand our reach globally.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity: We act with honesty and transparency in all our dealings.</li>
            <li>Innovation: We embrace change and continuously seek better solutions.</li>
            <li>Customer Focus: Our customers are at the heart of everything we do.</li>
            <li>Teamwork: We believe in collaboration and working together to achieve success.</li>
          </ul>
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Advanced Technology</h2>
          <p className="text-gray-700">
            We leverage the latest technology to bring you security solutions that are not only effective but also easy to use. From AI-powered monitoring to seamless integration with smart home devices, our technology keeps you connected and protected around the clock.
          </p>
        </div>

        {/* Meet the Team Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-bold text-lg">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="mt-2">With over 15 years of experience, John is passionate about advancing security solutions that keep people safe.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-bold text-lg">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
              <p className="mt-2">Jane leads our tech innovations, ensuring that we stay ahead in security advancements.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-bold text-lg">Michael Brown</h3>
              <p className="text-gray-600">Customer Support Manager</p>
              <p className="mt-2">Michael is dedicated to providing exceptional support and ensuring customer satisfaction.</p>
            </div>
          </div>
        </div>

        {/* Partnerships Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Our Trusted Partners</h2>
          <p className="text-gray-700">
            Over the years, we’ve formed strategic partnerships with industry-leading companies to provide comprehensive security solutions. These partnerships allow us to integrate advanced products into our systems, enhancing the level of security we can offer to our clients.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Client Testimonials</h2>
          <div className="flex flex-wrap md:flex-nowrap justify-center">
            <div className="w-full md:w-1/3 bg-gray-100 p-6 shadow-md rounded-lg mb-6 md:mb-0 md:mr-6">
              <p className="text-gray-700 italic">"The team exceeded our expectations. Their solution was customized to fit our needs perfectly!"</p>
              <p className="mt-4 text-indigo-800 font-semibold">- Sarah K., Business Owner</p>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 p-6 shadow-md rounded-lg">
              <p className="text-gray-700 italic">"I feel secure knowing that my home is protected by a trusted security provider."</p>
              <p className="mt-4 text-indigo-800 font-semibold">- Mike R., Homeowner</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center py-10 px-6 bg-indigo-500 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Join Us in Securing Your World</h2>
          <p className="mb-4">Reach out today to learn more about how we can help secure what matters most to you.</p>
          <a
            href="/contact"
            className="bg-white text-indigo-500 font-semibold py-2 px-4 rounded hover:bg-gray-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
