import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const product = products.find((item) => item.id.toString() === id);

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.some((item) => item.id === product.id);

    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, { ...product, quantity: 1 }]));
    }

    // Display success message with style
    alert("✅ Product added to cart successfully!");
  };

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Header /> {/* Header Component */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product.title}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>

              {/* Star Ratings */}
              <div className="flex mb-4">
                <span className="flex items-center">
                  {product.rating > 0 ? (
                    [...Array(Math.floor(product.rating))].map((_, index) => (
                      <svg
                        key={index}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))
                  ) : (
                    <span>No ratings available</span>
                  )}
                  <span className="text-gray-600 ml-3">{product.reviews} Reviews</span>
                </span>
              </div>

              <p className="leading-relaxed">{product.description}</p>

              {/* Warranty Options Section */}
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Warranty Options</span>
                  <select className="border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none">
                    <option value="1-year">1 Year Warranty</option>
                    <option value="2-year">2 Years Warranty</option>
                    <option value="3-year">3 Years Warranty</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>

                {/* Add to Cart Button */}
                <button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Footer Component */}
    </>
  );
};

export default ProductPage;
