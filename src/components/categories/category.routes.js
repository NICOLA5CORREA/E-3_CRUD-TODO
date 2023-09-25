import { Router } from 'express';
import { createCategory } from './category.controller.js';
const router = Router();

router.post('/categories', createCategory); 

router.route('/categories')
    .post(createCategory);

    // router.route('/users/:id').delete(deleteUser);

export default router;