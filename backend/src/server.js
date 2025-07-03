import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from 'cors';
import {clerkMiddleware} from "@clerk/express";
import userRoute from "./routes/user.route.js";

const app = express()

const PORT = ENV.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log("Error while starting server.", error.message);
  }
};
startServer();

app.get("/", (req, res) =>{
  res.send("Hello, world!")
});
app.use("/api/users",userRoute);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);

})