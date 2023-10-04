import mongoose from "mongoose";

const LawareaSchema = mongoose.Schema({
  Area: String,
  id: String,
});

var LawAreaSchema = mongoose.model("LawAreaSchema", LawareaSchema);

export default LawAreaSchema;
