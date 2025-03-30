// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Signup = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleSignup = async () => {
// //     // Check if passwords match
// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match');
// //       return;
// //     }

// //     try {
// //       const response = await fetch('http://localhost:4000/api/auth/register', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ name, email, password, mobileNumber }),
// //       });

// //       const data = await response.json();

// //       if (data.redirect) {
// //         // Redirect to login if the user already exists
// //         navigate('/login');
// //       } else if (response.ok) {
// //         // Navigate to login page after successful signup
// //         navigate('/login');
// //       } else {
// //         // Display error message for other cases
// //         setError(data.message || 'Signup failed');
// //       }
// //     } catch (err) {
// //       setError('Error during signup');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
// //         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Name</label>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             placeholder="Enter your full name"
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Email</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="Enter your email"
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
// //           <input
// //             type="text"
// //             value={mobileNumber}
// //             onChange={(e) => setMobileNumber(e.target.value)}
// //             placeholder="Enter your mobile number"
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Password</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Enter your password"
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //         </div>

// //         <div className="mb-6">
// //           <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
// //           <input
// //             type="password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             placeholder="Confirm your password"
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //         </div>

// //         {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

// //         <button
// //           onClick={handleSignup}
// //           className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //         >
// //           Sign Up
// //         </button>

// //         <div className="mt-4 text-center">
// //           <p className="text-sm text-gray-600">Already have an account?</p>
// //           <button 
// //             onClick={() => navigate('/login')} 
// //             className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
// //           >
// //             Login
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, mobileNumber }),
      });

      const data = await response.json();
      
      if (response.ok) {
        navigate('/login'); // Redirect to login on successful registration
      } else if (response.status === 409) {
        setError('User already exists'); // Show error if user already exists
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Error during registration');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-blue-600 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <button
          onClick={handleRegister}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Register
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <button 
            onClick={() => navigate('/login')} 
            className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

