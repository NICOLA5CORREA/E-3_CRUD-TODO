import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Category = db.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Category;