import express from 'express';
import { registerUser, loginUser, editUserDetails, editUserPassword } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// User Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/edit/:id', verifyToken, editUserDetails); 
router.put('/edit-password/:id', verifyToken, editUserPassword);

export default router;
