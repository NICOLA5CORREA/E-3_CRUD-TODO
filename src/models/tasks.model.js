import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Task = db.define(
  "tasks",
  {
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(50),
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
  },
  {
    timestamps: false,
  }
);

export default Task;