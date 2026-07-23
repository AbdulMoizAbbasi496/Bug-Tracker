// const Router = require("express");
// const bugRoutes = require('./bug.route');

import Router from "express";
import bugRoutes from './bug.route.js';
const router = Router();

router.use("/bug", bugRoutes);
export default router;