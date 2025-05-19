import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    img: String,
    price: { type: Number, required: true },
    priceTagline: { type: String },
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Grocery", grocerySchema);