// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         localStorage.setItem('authToken', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));  // Save user info
//         navigate('/cart');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('Error during login');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

//         <button
//           onClick={handleLogin}
//           className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           Login
//         </button>

//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">Don't have an account?</p>
//           <button 
//             onClick={() => navigate('/register')} 
//             className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(''); // Clear any previous errors
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and user information in localStorage
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user)); // Save user info
        
        // Redirect user to the cart or dashboard page after successful login
        navigate('/cart');
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <button
            onClick={() => navigate('/register')}
            className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
