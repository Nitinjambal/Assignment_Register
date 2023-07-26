import express from "express";
import { LoginUser, RegisterNewUser } from "../controllers/user.js";

const router = express.Router();


router.post("/register", RegisterNewUser);

router.post("/login", LoginUser);

export default router;

