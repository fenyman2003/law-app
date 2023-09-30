import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    default: 18,
  },
  phone: String,
  email: String,
});

var userSchema = mongoose.model("UserSchema", UserSchema);

export default userSchema;
