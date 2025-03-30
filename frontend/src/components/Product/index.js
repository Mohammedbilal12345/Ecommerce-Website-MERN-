// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductGrid = ({ products = [], category }) => {
//   const filteredProducts = category 
//     ? products.filter((product) => product.category === category) 
//     : products;

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
//                 {/* Unique Link for each product */}
//                 <Link to={`/product/${product.id}`} className="block relative h-48 rounded overflow-hidden">
//                   <img
//                     alt={product.title}
//                     className="object-cover object-center w-full h-full block"
//                     src={product.image}
//                   />
//                 </Link>
//                 <div className="mt-4">
//                   <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//                     {product.category}
//                   </h3>
//                   <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
//                   <p className="mt-1">₹{product.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div>No {category ? category.toLowerCase() : 'products'} available.</div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductGrid;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductGrid = ({ products = [] }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || ''; // Get the query from the URL

  // Filter products based on the search query (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={`/product/${product.id}`} className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title}
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <p className="mt-1">₹{product.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <div>No products found for "{searchQuery}".</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
