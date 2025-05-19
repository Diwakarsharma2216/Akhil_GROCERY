import express from "express";
import cors from "cors";
import groceryRoutes from "./routes/grocery.routes.js"
import { connectDB } from "./config/db.js"

const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api/groceries", groceryRoutes);

// root
app.get("/", (_req, res) => res.send("Grocery API running 🚀"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))