// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="text-gray-600 body-font border-t-2 border-gray-300 bg-gray-100">
//       <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//         <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
//           <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">SecureSys</span>
//           </a>
//           <p className="mt-2 text-sm text-gray-500">Your trusted partner in safety and surveillance.</p>
//         </div>
//         <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Products</h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">CCTV Cameras</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Smart Door Locks</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Alarm Systems</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Motion Sensors</a>
//               </li>
//             </nav>
//           </div>
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Support</h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Installation Guide</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">FAQs</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Returns & Warranty</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Customer Support</a>
//               </li>
//             </nav>
//           </div>
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Company</h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">About Us</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Careers</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Terms of Service</a>
//               </li>
//             </nav>
//           </div>
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Connect</h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Newsletter Signup</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Blog</a>
//               </li>
//               <li>
//                 <a className="text-gray-600 hover:text-gray-800">Media Inquiries</a>
//               </li>
//             </nav>
//           </div>
//         </div>
//       </div>
//       <div className="bg-gray-200">
//         <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//           <p className="text-gray-500 text-sm text-center sm:text-left">
//             © 2024 SecureSys — 
//             <a
//               href="https://instagram.com/yourinstagram"
//               rel="noopener noreferrer"
//               className="text-indigo-500 ml-1 hover:underline"
//               target="_blank"
//             >
//               Follow us on Instagram
//             </a>
//           </p>
//           <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
//             <a href="https://www.facebook.com" className="text-gray-500 hover:text-indigo-500">
//               {/* Facebook Icon */}
//             </a>
//             <a href="https://www.twitter.com" className="ml-3 text-gray-500 hover:text-indigo-500">
//               {/* Twitter Icon */}
//             </a>
//             <a href="https://www.instagram.com" className="ml-3 text-gray-500 hover:text-indigo-500">
//               {/* Instagram Icon */}
//             </a>
//             <a href="https://www.linkedin.com" className="ml-3 text-gray-500 hover:text-indigo-500">
//               {/* LinkedIn Icon */}
//             </a>
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-100 body-font border-t-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SecureSys</span>
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">Your trusted partner in safety and surveillance.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">Products</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">CCTV Cameras</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Smart Door Locks</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Alarm Systems</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Motion Sensors</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">Support</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Installation Guide</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">FAQs</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Returns & Warranty</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">Contact Support</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
