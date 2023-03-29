const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    socialId: {
      type: String,
    },
    roles: {
      type: String,
      enum: ["user", "content-writer", "company"],
      default: "user",
    },
    addedCompany: { type: mongoose.Schema.Types.ObjectId, ref: "CompanyForm" },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.signUp = async function (email, password) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Enter a valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password must contain a number and a special character and a capital letter"
    );
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("Email already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    email,
    password: hash,
  });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Email does not exist");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Password is incorrect");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
