import express from "express";
import cors from "cors";
import { connectDB } from "./data/database.js"
import userRouter from "./routes/user.js"


const app=express()

connectDB()


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))


app.use("/api/v1/users", userRouter);



app.use("/",(req,res)=>{
    res.status(444).json({
        message:"It is working fine"
    })
})

app.listen(3000, () => {
    console.log(`server is listening in port 3000`);
})