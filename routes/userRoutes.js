// routes/userRoutes.js
import express from 'express';
import { registerUser, loginUser, editUserDetails, editUserPassword } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js'; // Import the middleware

const router = express.Router();

// User Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/edit/:id', editUserDetails); // Protect this route
router.put('/edit-password/:id', editUserPassword); // Protect this route

export default router;
