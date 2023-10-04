import express from "express";
import mongoose from "mongoose";
import userSchema from "../models/userSchema.js";
import lawyerSchema from "../models/lawyerSchema.js";

const router = express.Router();

// create new User
export const createUser = async (req, res) => {
  const newUser = new userSchema(req.body);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// create new Lawyer
export const createLawyer = async (req, res) => {
  try {
    const newLawyer = new lawyerSchema(req.body);
    await newLawyer.save();
    res.status(201).json(newLawyer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// get all Lawyers
export const getLawyers = async (req, res) => {
  try {
    const { lawArea } = req.query;
    const getLawyers = await lawyerSchema.find();
    res.status(200).json(getLawyers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get all Users
export const getUsers = async (req, res) => {
  try {
    console.log("Hello friends");
    const getUsers = await userSchema.find();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get lawyer by id
export const getLawyer = async (req, res) => {
  try {
    const { id } = req.params;
    const getLawyer = await lawyerSchema.findById(id);
    res.status(200).json(getLawyer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get user by id
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await userSchema.findById(id);
    res.status(200).json(getUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateLawyer = async (req, res) => {
  const { id } = req.params;
  const newLawyer = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedLawyer = { ...newLawyer, _id: id };

  await lawyerSchema.findByIdAndUpdate(id, updatedLawyer, { new: true });

  res.json(updatedLawyer);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const newUser = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedUser = { ...newUser, _id: id };

  await userSchema.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await userSchema.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export const deleteLawyer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await lawyerSchema.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export const getSearchResults = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ message: error.message });
  }
};

export const getUserSearchResults = async (req, res) => {
  try {
    const { names } = req.query;
    const products = await lawyerSchema
      .find({
        name: {
          $regex: new RegExp("^" + names.toLowerCase(), "i"),
        },
      })
      .limit(10);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ message: error.message });
  }
};

export const getAreaSearchResults = async (req, res) => {
  try {
    const { lawAreas } = req.query;
    const products = await lawyerSchema
      .find({
        lawArea: {
          $regex: new RegExp("^" + lawAreas.toLowerCase(), "i"),
        },
      })
      .limit(10);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ message: error.message });
  }
};
// export const likePost = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   const post = await PostMessage.findById(id);

//   const updatedPost = await PostMessage.findByIdAndUpdate(
//     id,
//     { likeCount: post.likeCount + 1 },
//     { new: true }
//   );

//   res.json(updatedPost);
// };

// export default router;
