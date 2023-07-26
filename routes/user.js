import express from "express";
import { RegisterNewUser } from "../controllers/user.js";

const router = express.Router();


router.post("/register", RegisterNewUser);

export default router;

