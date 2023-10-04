import mongoose from "mongoose";

const LawyerSchema = mongoose.Schema({
  name: String,
  lawArea: [],
  biography: String,
  region: String,
  stars: {
    type: Number,
    default: 0,
    required: false,
  },
  experience: {
    type: Number,
    default: 3,
  },
  // languages: [String],
  noOfReviews: {
    type: Number,
    default: 0,
    required: false,
  },
  charges: {
    type: Number,
    default: 0,
  },
  consultingTime: String,
});

var lawyerSchema = mongoose.model("LawyerSchema", LawyerSchema);

export default lawyerSchema;
