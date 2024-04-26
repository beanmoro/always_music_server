import express from "express";
import studentRoutes from "./routes/students.route.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/students", studentRoutes);

app.listen(PORT, () =>
  console.log(`Server running on https://localhost:${PORT}`)
);
