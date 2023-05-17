const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require('validator');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Value must be required"],
    trim : true,
    minlength: 3, 
    maxlength: 50

  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
  },
  password: {
    type: String,
    default: null,
    minlength : 6

  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
});

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = async function () {
  return jwt.sign({userid: this._id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}


UserSchema.methods.comparePassword = async function(enterPassword) {
  const isMatch = await bcrypt.compare(enterPassword, this.password);
  return isMatch;
}

module.exports = mongoose.model("user", UserSchema);
