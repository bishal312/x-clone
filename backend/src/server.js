import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express()

const PORT = ENV.PORTs || 3000;

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
})

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);

})