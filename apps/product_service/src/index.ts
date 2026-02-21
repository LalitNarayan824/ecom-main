import express, { Request, Response } from "express";
import cors from "cors";

const PORT = 8000;

const app = express();

app.use( cors({
    origin:["http://localhost:3001", "http://localhost:3002"],
    credentials:true
}) )

app.get("/health", (req:Request , res:Response) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: Date.now(),
    })
});



app.listen(PORT, () => {
    console.log(`PRODUCT SERVICE is running on port ${PORT}`);
});