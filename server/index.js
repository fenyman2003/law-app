import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userSchema from "./models/userSchema.js";

import {
  getUsers,
  getLawyers,
  createUser,
  createLawyer,
  getUser,
  getLawyer,
  updateLawyer,
  updateUser,
  deleteLawyer,
  deleteUser,
  getSearchResults,
  getAreaSearchResults,
  getUserSearchResults,
} from "../server/controllers/posts.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://CoLawab:u11rPdU03ApVaFYZ@cluster0.5kggfat.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to mongodb");
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));

app.get("/users", getUsers);
app.post("/users", createUser);
app.get("/lawyers", getLawyers);
app.post("/lawyers", createLawyer);
app.get("/lawyers/:id", getLawyer);
app.get("/users/:id", getUser);
app.patch("/users/:id", updateUser);
app.patch("/lawyers/:id", updateLawyer);
app.delete("/lawyers/:id", deleteLawyer);
app.patch("/users/:id", deleteUser);
app.get("/search", getSearchResults);
app.get("/search/name", getUserSearchResults);
app.get("/search/area", getAreaSearchResults);
