import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Categorytask = db.define(
  "categoriestasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryId: {

      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "task_id",
    },
  },
  {
    timestamps: false,
  }
);

export default Categorytask;
