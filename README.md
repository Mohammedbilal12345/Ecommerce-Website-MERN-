# MERN Stack eCommerce Website - Security Systems

## Overview
This is a **MERN stack eCommerce website** designed to sell **security systems**. It features a professional and attractive UI with animations, a secure backend, and a seamless shopping experience.

## Features
- **User Authentication** (Login, Signup, JWT Authentication, Bcrypt for password hashing)
- **Product Management** (Add, Update, Delete security system products)
- **Shopping Cart & Checkout**
- **Order Tracking & Payment Integration (Stripe Payment Gateway)**
- **Responsive & Attractive UI with Tailwind CSS & Animations**
- **Admin Dashboard for Product & Order Management**
- **Category-wise Product Listings (Indoor & Outdoor Security Systems)**
- **Customer Reviews & Testimonials Section**
- **Search & Filter Functionality**
- **Secure API with Express & Node.js**

## Tech Stack
### Frontend (React.js)
- **React.js** with React Router for navigation
- **Tailwind CSS** for modern styling
- **Redux Toolkit** for state management
- **Framer Motion** for smooth animations

### Backend (Node.js & Express.js)
- **Node.js & Express.js** for the REST API
- **MongoDB Atlas & Mongoose** for the database
- **JWT Authentication & Bcrypt** for secure user login
- **Cloudinary** for image uploads
- **Stripe Payment Gateway** for secure transactions

### Payment & Deployment
- **Stripe** for payment processing
- **Vercel / Netlify** for frontend deployment
- **Render / Heroku** for backend deployment

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/security-ecommerce.git
cd security-ecommerce
```

### 2. Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd frontend
npm install
```

### 3. Environment Variables
Create a **.env** file in the **backend** folder and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Run the Application
#### Backend
```sh
npm run dev
```
#### Frontend
```sh
npm start
```

## Deployment
- Use **Vercel/Netlify** for frontend deployment.
- Use **Render/Heroku** for backend deployment.
- Configure **MongoDB Atlas** for cloud database storage.

## Contributing
Feel free to fork the repository and submit pull requests. Any contributions are welcome!

## License
This project is licensed under the **MIT License**.

## Contact
For any inquiries, reach out to me at: **mohammedbilal96654@gmail.com **

