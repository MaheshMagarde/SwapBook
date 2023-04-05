const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid mail",
    ],
    unique: [true, "please provide unique email"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  coins: {
    type: Number,
    default: 5000,
  },
  bookAccess: {
    type: Array,
    default: ["entry"],
  },
  tickets: {
    type: Array,
    default: ["entry of object"],
  },
});

// UserSchema.pre("save", async function () {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// UserSchema.methods.getToken = function () {
//   return jwt.sign(
//     {
//       userId: this._id,
//       name: this.name,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: process.env.JWT_LIFETIME,
//     }
//   );
// };

// UserSchema.methods.comparePassword = async function (password) {
//   const isMatch = await bcrypt.compare(password, this.password);
//   return isMatch;
// };
module.exports = mongoose.model("user", UserSchema);
