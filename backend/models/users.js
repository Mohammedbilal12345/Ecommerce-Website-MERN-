// // models/User.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// // Define the User Schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     lowercase: true,
//     match: [/.+\@.+\..+/, 'Please enter a valid email address']
//   },
//   mobileNumber: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 8
//   },
//   confirmPassword: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function(value) {
//         // Ensure confirmPassword matches password
//         return value === this.password;
//       },
//       message: 'Passwords do not match'
//     }
//   }
// });

// // Hash password before saving to database
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
  
//   // Hash the password
//   this.password = await bcrypt.hash(this.password, 10);

//   // We don't need to store confirmPassword in the database
//   this.confirmPassword = undefined;
//   next();
// });

// // Create the User model
// const User = mongoose.model('User', userSchema);

// module.exports = User;



const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare hashed password
UserSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
