import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Bug = sequelize.define(
    "Bug",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        status: {
            type: DataTypes.ENUM(
                "Open",
                "In Progress",
                "Resolved",
                "Closed"
            ),
            defaultValue: "Open"
        },

        priority: {
            type: DataTypes.ENUM(
                "Low",
                "Medium",
                "High"
            ),
            defaultValue: "Medium"
        },

        reporter: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "bugs"
    }
);

export default Bug;