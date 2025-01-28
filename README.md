#Ecommerce Website 

Security System E-Commerce Website
A full-stack e-commerce platform for selling advanced security systems, built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website includes secure user authentication, password encryption with bcrypt, a product search engine, and a seamless shopping experience with a professional design.

Achievement: This project was submitted as part of the Web Technology course at PES University and was graded a perfect 20/20.

Features
User Authentication: Secure registration and login with hashed passwords using bcrypt and JWT (JSON Web Tokens).
Password Encryption: User passwords are securely hashed before being stored in the database.
Product Search Engine: Search and filter security products with ease.
Product Catalog: Browse products with detailed descriptions, images, and prices.
Shopping Cart: Add items to the cart and proceed to checkout.
Stripe Payment Gateway: Integrated Stripe for secure payment processing.
Responsive Design: A mobile-friendly and user-friendly interface.
Dark Theme: Toggle between light and dark themes for a customized user experience.
Secure Backend: API endpoints protected with authentication and authorization.
Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Password Security: bcrypt for hashing passwords
Payment Integration: Stripe
Theme Support: Dark Mode



Installation Instructions
1. Clone the Repository
git clone https://github.com/username/Ecommerce-Website-MERN-.git
2. Navigate to the Project Folder
cd Ecommerce-Website-MERN-
3. Install Dependencies
Frontend
cd frontend
npm install
Backend
cd ../backend
npm install
4. Configure Environment Variables
Create a .env file in the backend directory and configure the following variables:
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
BCRYPT_SALT_ROUNDS=10
5. Run the Application
Backend Server
cd backend
npm start
Frontend Server
cd ../frontend
npm start
The application will be available at:

Frontend: http://localhost:3000
Backend: http://localhost:5000
Folder Structure
Ecommerce-Website-MERN-/
├── frontend/          # React.js frontend code
└── backend/           # Node.js and Express.js backend code
Key Functionalities
User Authentication Flow: Users can register, log in, and securely manage their sessions with JWT.
Secure Password Storage: Passwords are hashed using bcrypt before storing in MongoDB.
Search Engine: A search bar on the frontend allows users to find products by name or description.
Cart System: Add items to a cart and review them before proceeding to checkout.
![image](https://github.com/user-attachments/assets/9b50e970-2585-4f72-a3e5-ac516c5f2c4d)
![image](https://github.com/user-attachments/assets/27b31319-a5c4-4d18-a6c5-731a9820213b)
![image](https://github.com/user-attachments/assets/f87c9bfc-7f06-44cd-992a-33c4e5e4f216)
![image](https://github.com/user-attachments/assets/35a002f3-d6e6-491d-920f-2c8e467230db)
![image](https://github.com/user-attachments/assets/ebce82a6-83ec-4ef7-bff2-af0fd9de8737)
![image](https://github.com/user-attachments/assets/dfce8e27-4ee5-4383-b7f6-c5a22656ab6e)
![image](https://github.com/user-attachments/assets/b1042ee2-b4d8-4d65-9330-39664bfa1866)
![image](https://github.com/user-attachments/assets/e362271d-5e13-4a05-81ba-7c24aedbb690)
![image](https://github.com/user-attachments/assets/bd4bb587-3593-4ff5-8d73-a25570162509)
![image](https://github.com/user-attachments/assets/e24ce06c-54d8-4c88-bac2-dd8fb2efe1dd)




Contributing
Contributions are welcome! Feel free to fork the repository, make changes, and create a pull request.







