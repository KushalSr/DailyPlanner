// import express from "express";
// import { User } from "../models/user.js";
// import {
//     getMyProfile,
//     register,
//     login,
//     logout,
// } from "../controllers/user.js";
// import { isAuthenticated } from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/new", register);
// router.post("/login", login);
// router.get("/logout", logout);
// router.get("/me", isAuthenticated, getMyProfile);

// export default router;


import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;
