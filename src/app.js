import express from "express";
import cors from "cors";
import escortRouter from "./routes/escort.route.js";
import clientRouter from "./routes/client.route.js"
import adminRouter from "./routes/admin.route.js";

const app = express();

app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:5173",
        "http://testing.greenevelvet.com",
        "http://localhost:5174",
        "http://admin.greenevelvet.com/"
    ]
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* Health Check */
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API is running successfully"
    });
});

/* Routes */
app.use('/admin', adminRouter);
app.use('/escort', escortRouter);
app.use('/client', clientRouter);

/* Global Error Handler */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

export default app;