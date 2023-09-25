import User from "../../models/users.model.js";
import Category from "../../models/categories.model.js";

const createUser = async (req, res) => {
  try {
    const { category, ...user } = req.body;
    const [newUser] = await User.findOrCreate({
      where: { name: user.name },
    });
    defaults: user;
    const userCategory = await Category.findOne({
      where: { name: category },
    });
    await newUser.addCategory(userCategory);
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { createUser };