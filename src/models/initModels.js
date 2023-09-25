import Task from './tasks.model.js';
import Category from './categories.model.js';
import User from './users.model.js';
// import Categorytask from './categories_task.model.js';

const initModels = () => {
    User.hasMany(Task, {foreignKey: 'categoryId'});
    Task.belongsTo(User, {foreignKey: 'categoryId'});

    Category.belongsToMany(Task, {through: 'CategoriesTask'});
    Task.belongsToMany(Category, {through: 'CategoriesTask'});
}


export default initModels;