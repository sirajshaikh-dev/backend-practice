import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.get("/register", register);
authRoutes.get("/login", login);
authRoutes.get("/logout", logout);

export default authRoutes;
