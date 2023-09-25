import express from "express";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import User from "./models/users.model.js";
import usersRoutes from "./components/users/users.routes.js";
import Task from "./models/tasks.model.js";
import tasksRoutes from "./components/tasks/tasks.routes.js";
import Category from "./models/categories.model.js";
import categoryRoutes from "./components/categories/category.routes.js";

import "dotenv/config";

initModels();

//variable del entorno llamada PORT
const PORT = process.env.PORT ?? 5050;

// probar conexión a la DB
db.authenticate()
  .then(() => console.log("conexión correcta"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("base de datos sincronizada"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(usersRoutes);
app.use(tasksRoutes);
app.use(categoryRoutes);

//HEALTHCHECK
app.get("/", (req, res) => {
  res.send("OK");
});

//CREATE USER
app.post("/user", async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
});

// //CREATE TASK BY CATEGORY_ID

app.post("/task", async (req, res) => {
  try {
    const { body } = req;
    const task = await Task.create(body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json(error);
  }
});


// //CREATE CATEGORY

app.post("/categories", async (req, res) => {
  try {
    const { body } = req;
    const category = await Category.create(body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

// //READ USERS

app.get("/user", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

// // FIND ONE :id

app.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    res.json(task);
  } catch (error) {
    res.status(400).json(error);
  }
});


// // DELETE TASK BY ID

app.delete('/tasks/:id', async ( req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: { id }
    });
    res.status(204).end()
  } catch (error) {
    res.status(400).json(err);
  }
  });


app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});
