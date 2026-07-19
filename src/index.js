import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5002;

// Connect to Database
connectDB();
//middleware
app.use(cors());
app.use(express.json());

//  Register Routes
app.use("/api/users", userRoutes);

//error handler
app.use(errorHandler);

//server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
