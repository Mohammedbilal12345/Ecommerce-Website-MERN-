// import React from 'react';
// import { Link } from 'react-router-dom';

// const Feature = () => {
//   return (
//     <section className="text-gray-900 body-font bg-gray-50 py-12">
//       <div className="container mx-auto px-5">
//         {/* Section Header */}
//         <div className="text-center w-full mb-10">
//           <h2 className="text-xs text-indigo-600 tracking-widest font-semibold mb-2">SECURITY SYSTEMS</h2>
//           <h1 className="text-2xl sm:text-3xl font-bold title-font text-gray-800">Explore Security Categories</h1>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
//             Choose from our range of security systems designed to protect your indoor, outdoor, and smart environments with cutting-edge technology.
//           </p>
//         </div>

//         {/* Category Cards */}
//         <div className="flex flex-wrap -m-4">
//           {/* Indoor Security */}
//           <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
//             <Link to="/indoor-security" className="block transform hover:-translate-y-2 transition-transform duration-200 shadow-lg bg-white rounded-lg overflow-hidden">
//               <div className="flex items-center p-6 space-x-4">
//                 <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center">
//                   <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
//                     <path d="M10 20v-6a2 2 0 0 1 2-2h6"></path>
//                     <circle cx="18" cy="6" r="3"></circle>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg font-semibold text-gray-800">Indoor Security</h2>
//               </div>
//               <p className="px-6 pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
//                 Comprehensive indoor surveillance systems, ideal for home and office protection.
//               </p>
//             </Link>
//           </div>

//           {/* Outdoor Security */}
//           <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
//             <Link to="/outdoor-security" className="block transform hover:-translate-y-2 transition-transform duration-200 shadow-lg bg-white rounded-lg overflow-hidden">
//               <div className="flex items-center p-6 space-x-4">
//                 <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center">
//                   <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
//                     <path d="M17 10l4-4-4-4M3 20h18M4 4h10"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg font-semibold text-gray-800">Outdoor Security</h2>
//               </div>
//               <p className="px-6 pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
//                 Robust outdoor systems with weatherproof designs to ensure safety in any condition.
//               </p>
//             </Link>
//           </div>

//           {/* Smart Security */}
//           <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
//             <Link to="/smart-security" className="block transform hover:-translate-y-2 transition-transform duration-200 shadow-lg bg-white rounded-lg overflow-hidden">
//               <div className="flex items-center p-6 space-x-4">
//                 <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center">
//                   <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
//                     <path d="M12 20v-6M6 20h12M6 10h12"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-lg font-semibold text-gray-800">Smart Security</h2>
//               </div>
//               <p className="px-6 pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
//                 Innovative smart security solutions with app integrations for easy monitoring.
//               </p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Feature;

import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <section className="text-gray-900 dark:text-gray-100 body-font bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center w-full mb-10">
          <h2 className="text-xs text-indigo-600 tracking-widest font-semibold mb-2">SECURITY SYSTEMS</h2>
          <h1 className="text-2xl sm:text-3xl font-bold title-font text-gray-800 dark:text-gray-100">
            Explore Security Categories
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Choose from our range of security systems designed to protect your indoor, outdoor, and smart environments with cutting-edge technology.
          </p>
        </div>

        {/* Category Cards */}
        <div className="flex flex-wrap -m-4">
          {/* Indoor Security */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <Link to="/indoor-security" className="block transform hover:-translate-y-2 transition-transform duration-200 shadow-lg bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center p-6 space-x-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M10 20v-6a2 2 0 0 1 2-2h6"></path>
                    <circle cx="18" cy="6" r="3"></circle>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Indoor Security</h2>
              </div>
              <p className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Comprehensive indoor surveillance systems, ideal for home and office protection.
              </p>
            </Link>
          </div>

          {/* Outdoor Security */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <Link to="/outdoor-security" className="block transform hover:-translate-y-2 transition-transform duration-200 shadow-lg bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center p-6 space-x-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M17 10l4-4-4-4M3 20h18M4 4h10"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Outdoor Security</h2>
              </div>
              <p className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Robust outdoor systems with weatherproof designs to ensure safety in any condition.
              </p>
            </Link>
          </div>

          {/* Smart Security */}
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <Link to="/smart-security" className="block transform hover:-translate-y-2 transition-transform duration-200 shadow-lg bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center p-6 space-x-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 20v-6M6 20h12M6 10h12"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Smart Security</h2>
              </div>
              <p className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Innovative smart security solutions with app integrations for easy monitoring.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
