const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  email: {
    type: "string",
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please enter a valid email");
      }
    },
  },
  password: {
    type: "string",
    required: true,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password must not contains 'password'");
      }
    },
  },
  tokens: [
    {
      token: {
        type: "string",
        trim: true,
      },
    },
  ],
});

const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;
