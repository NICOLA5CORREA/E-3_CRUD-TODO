import Category  from "../../models/categories.model.js";

const createCategory = async (req, res) => {
  try {
    const { category, ...categories } = req.body;
    const [newCategory, created] = await Category.findOrCreate({
      where: { name: categories.name },
      defaults: { name: categories.name }, // Esto establece el valor predeterminado si no se encuentra una categoría existente
    });
    
    res.status(200).json({ newCategory, created }); // Devuelve la nueva categoría y si fue creada o no
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { createCategory };
