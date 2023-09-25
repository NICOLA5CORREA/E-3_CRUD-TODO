import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const User = db.define(
  "users",
  {
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default User;
