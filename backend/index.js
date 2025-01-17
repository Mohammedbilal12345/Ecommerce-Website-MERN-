// index.js
const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import mongoose for MongoDB connection
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Ensure your .env has STRIPE_SECRET_KEY

app.use(cors());
app.use(bodyParser.json());



// MongoDB connection
const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

// Call the MongoDB connection function
connectToMongoDB();

const authRoutes = require('./routes/Auth');


app.use('/api/auth', authRoutes);


// Endpoint for creating a Stripe checkout session
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

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


