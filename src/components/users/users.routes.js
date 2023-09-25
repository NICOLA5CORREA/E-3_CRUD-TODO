import { Router } from 'express';
import { createUser } from './users.controllers.js';
const router = Router();

router.post('/users', createUser); 
router.route('/users')
    .post(createUser);

    // router.route('/users/:id').delete(deleteUser);

export default router;