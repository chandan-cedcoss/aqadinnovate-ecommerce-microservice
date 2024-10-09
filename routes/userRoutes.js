import express from 'express';
import { registerUser, loginUser, editUserDetails, editUserPassword } from '../controllers/userController.js';

const router = express.Router();

// User Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/edit/:id', editUserDetails);
router.put('/edit-password/:id', editUserPassword);

export default router;
