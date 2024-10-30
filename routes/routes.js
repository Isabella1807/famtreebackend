import express from "express";
import {showFruits} from "../controllers/fruit.js";

const router = express.Router();

router.get("/fruit", showFruits);

export default router;