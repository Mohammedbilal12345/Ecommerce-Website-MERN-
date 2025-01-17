import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-5 text-indigo-800">Connect with Us</h1>
        <p className="text-center text-gray-700 text-lg mb-10">
          We’re here to answer your questions and help you feel secure. Learn more about our services, values, and commitment to providing top-notch security solutions.
        </p>

        {/* Contact Details Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start mb-16">
          <div className="w-full md:w-1/3 bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Phone Support</h2>
            <p className="text-gray-600">Reach out directly to our support team:</p>
            <p className="mt-2 text-indigo-600 font-medium">+1 (123) 456-7890</p>
            <p className="text-indigo-600 font-medium">+1 (987) 654-3210</p>
            <p className="text-gray-500 text-sm mt-4">Available Mon - Fri, 9 AM - 6 PM</p>
          </div>

          <div className="w-full md:w-1/3 bg-white p-8 shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
            <h2 className="text-xl font-semibold mb-4">Email Us</h2>
            <p className="text-gray-600">For inquiries and assistance, email:</p>
            <p className="mt-2 text-indigo-600 font-medium">support@securitesystem.com</p>
            <p className="text-indigo-600 font-medium">info@securitesystem.com</p>
          </div>

          <div className="w-full md:w-1/3 bg-white p-8 shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
            <h2 className="text-xl font-semibold mb-4">Visit Our Office</h2>
            <p className="text-gray-600">We’re located at:</p>
            <p className="mt-2">123 Main St, Cityville, CA 12345</p>
            <p className="text-gray-500 text-sm">Feel free to drop by for consultations.</p>
          </div>
        </div>

        {/* Company Values Section */}
        <div className="bg-gray-100 py-10 px-6 md:px-12 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Our Commitment to Your Security</h2>
          <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Trusted Expertise</h3>
              <p className="text-gray-700">
                With years of experience in the security industry, we bring expertise to every client. We’re committed to providing state-of-the-art systems and top-level support.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 md:ml-6">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Reliability & Precision</h3>
              <p className="text-gray-700">
                Our solutions are reliable, accurate, and designed to give you peace of mind. Each system is tailored to meet your unique security needs.
              </p>
            </div>
            <div className="w-full md:w-1/3 md:ml-6">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Client-Centric Approach</h3>
              <p className="text-gray-700">
                Our clients are our top priority. From consultation to installation, we work closely with you to ensure you receive the best protection and service possible.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">What Our Clients Say</h2>
          <div className="flex flex-wrap md:flex-nowrap justify-center">
            <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg mb-6 md:mb-0 md:mr-6">
              <p className="text-gray-700 italic">"Exceptional service and top-quality security solutions. I feel safer knowing my business is protected by them!"</p>
              <p className="mt-4 text-indigo-600 font-semibold">- John D., Business Owner</p>
            </div>
            <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-700 italic">"They took the time to understand our needs and provided a custom solution that exceeded our expectations."</p>
              <p className="mt-4 text-indigo-600 font-semibold">- Sarah L., Homeowner</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center py-10 px-6 bg-indigo-600 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Property?</h2>
          <p className="mb-6">Get in touch with our security experts today and find out how we can help protect what matters most to you.</p>
          <p className="font-semibold text-lg">Call us at +1 (123) 456-7890 or email support@securitesystem.com</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
