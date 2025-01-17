
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');
// // const cors = require('cors');

// // const app = express();
// // const PORT = 4000;
// // const MONGO_URI = 'mongodb://localhost:27017/Database';
// // const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a strong secret or store it in an environment variable

// // // Middleware
// // app.use(bodyParser.json());
// // app.use(cors());

// // // MongoDB Connection
// // mongoose
// //   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('Connected to MongoDB'))
// //   .catch((err) => console.error('MongoDB connection error:', err));

// // // User Schema
// // const userSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   email: { type: String, unique: true, required: true },
// //   password: { type: String, required: true },
// //   mobileNumber: { type: String, required: true },
// // });

// // // Pre-save Hook to Hash Password
// // userSchema.pre('save', async function (next) {
// //   if (!this.isModified('password')) return next();
// //   this.password = await bcrypt.hash(this.password, 10);
// //   next();
// // });

// // // User Model
// // const User = mongoose.model('User', userSchema);

// // // Register Route
// // app.post('/api/auth/register', async (req, res) => {
// //   const { name, email, password, mobileNumber } = req.body;

// //   try {
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(200).json({ message: 'User already exists', redirect: true });
// //     }

// //     const newUser = new User({ name, email, password, mobileNumber });
// //     await newUser.save();

// //     res.status(201).json({ message: 'User registered successfully', redirect: false });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error registering user', error: error.message });
// //   }
// // });

// // // Login Route
// // app.post('/api/auth/login', async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, user.password);
// //     if (!isPasswordValid) {
// //       return res.status(400).json({ message: 'Invalid credentials' });
// //     }

// //     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
// //     res.status(200).json({
// //       message: 'Login successful',
// //       token,
// //       user: { id: user._id, name: user.name, email: user.email, mobileNumber: user.mobileNumber },
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error logging in', error: error.message });
// //   }
// // });

// // // Start the Server
// // app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const Stripe = require('stripe');
// const stripe = Stripe('STRIPE_SECRET_KEY');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const app = express();
// const PORT = 4000;
// const MONGO_URI = 'mongodb://localhost:27017/Database';
// const JWT_SECRET = 'your_jwt_secret_key';

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB Connection
// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   mobileNumber: { type: String, required: true },
// });

// // Pre-save Hook to Hash Password
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// // User Model
// const User = mongoose.model('User', userSchema);

// // Register Route
// app.post('/api/auth/register', async (req, res) => {
//   const { name, email, password, mobileNumber } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists' }); // Status 409 indicates conflict
//     }

//     const newUser = new User({ name, email, password, mobileNumber });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering user', error: error.message });
//   }
// });

// // Login Route
// app.post('/api/auth/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       user: { id: user._id, name: user.name, email: user.email, mobileNumber: user.mobileNumber },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error: error.message });
//   }
// });

// app.post('/create-checkout-session', async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: req.body.lineItems,
//       mode: 'payment',
//       success_url: 'http://localhost:3000/success',
//       cancel_url: 'http://localhost:3000/cancel',
//     });
//     res.json({ id: session.id });
//   } catch (error) {
//     console.error('Error creating Stripe checkout session:', error);
//     res.status(500).send('Error creating checkout session');
//   }
// });

// // Start the Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

require('dotenv').config(); // Load environment variables from a .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Stripe = require('stripe'); // Stripe secret key from environment variables
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 4000;
const MONGO_URI = 'mongodb://localhost:27017/Database';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // JWT secret from environment variables

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true },
});

// Pre-save Hook to Hash Password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// User Model
const User = mongoose.model('User', userSchema);

// Register Route
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password, mobileNumber } = req.body;

  // Validate input
  if (!name || !email || !password || !mobileNumber) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' }); // Conflict
    }

    const newUser = new User({ name, email, password, mobileNumber });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email, mobileNumber: user.mobileNumber },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

// Stripe Checkout Session Creation Route
app.post('/create-checkout-session', async (req, res) => {
  const { lineItems } = req.body;

  try {
    // Validate that lineItems array contains valid product data
    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
      return res.status(400).json({ error: 'lineItems must be a non-empty array' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems.map(item => ({
        price_data: {
          currency: 'usd', // Adjust currency as needed
          product_data: {
            name: item.name || 'Product Name', // Default name if missing
            images: item.images || ['https://example.com/default.jpg'], // Ensure valid URL
          },
          unit_amount: 500, //item.unit_amount, // Price in cents; e.g., 500 for $5.00
        },
        quantity: item.quantity || 1,
      })),
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`, // Use CLIENT_URL from .env for flexibility
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));