const express = require('express');
const mongoose = require('mongoose'); // MongoDB
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

// Load environment variables
dotenv.config();

// Initialize Express & Stripe
const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors());
app.use(express.json()); // Replaces bodyParser.json() for latest best practice

// ✅ Secure MongoDB Connection
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};
connectToMongoDB();

// Import Routes
const authRoutes = require('./routes/Auth');
app.use('/api/auth', authRoutes);

// ✅ Stripe Checkout Endpoint
app.post('/create-checkout-session', async (req, res) => {
  const { lineItems } = req.body;

  try {
    // Validate input
    if (!Array.isArray(lineItems) || lineItems.length === 0) {
      return res.status(400).json({ error: 'Invalid lineItems array' });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems.map(item => ({
        price_data: {
          currency: 'usd', // Adjust as needed
          product_data: {
            name: item.name || 'Unnamed Product',
            images: item.images?.length ? item.images : ['https://example.com/default.jpg'],
          },
          unit_amount: item.unit_amount || 500, // Price in cents (default: $5)
        },
        quantity: item.quantity || 1,
      })),
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("❌ Stripe Checkout Error:", error.message);
    res.status(500).json({ error: "Stripe Checkout Failed" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
