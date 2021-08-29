const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already exists"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email!");
      }
    }
  },
  phone: {
    type: Number,
    minlength: 11,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  }
});

// Here we create new collection
const User = new mongoose.model("User", userSchema);
module.exports = User;
