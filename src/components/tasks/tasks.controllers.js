import Task from "../../models/tasks.model.js";
import Category from "../../models/categories.model.js";
import User from "../../models/users.model.js";

const createTask = async (req, res) => {
  try {
    const { taskCategory, ...task } = req.body;
    const [newTask] = await Task.findOrCreate({
      where: { title: task.title },
      defaults: task,
    });
    const CategoriesTask = await Category.findOne({
      where: { id: task.id },
    });
    await newTask.addCategory(CategoriesTask);
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


const updateTaskStatus = async (req, res) => {
  try {
    const taskId = req.params.id; 

    // Encuentra la tarea por su ID
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    // Actualiza el estado "completed" de la tarea
    task.completed = req.body.completed;

    // Guarda los cambios en la base de datos
    await task.save();

    res
      .status(200)
      .json({ message: "Estado de la tarea actualizado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


const getTasksByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Busca al usuario por su ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const tasks = await Task.findAll({
      where: { userId }, // Filtra las tareas por el ID del usuario
    });

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { createTask, updateTaskStatus, getTasksByUser };

