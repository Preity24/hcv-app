import express from "express";
import db from "./config/db.js";
import OppRoutes from "./routes/index.js";
import cors from "cors";
import multer, { memoryStorage } from "multer";

const app = express();

try {
    db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any());
app.use('/opportunities', OppRoutes);

app.listen(5001, () => console.log('Server running at port 5001'));