import sequelize from "../config/database.js";
import Bug from "./Bug.js";

const db = {};

db.sequelize = sequelize;

db.Bug = Bug;

export default db;