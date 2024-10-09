import express from 'express';
import dbConnection from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import variantRoutes from './routes/variantRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { verifyToken } from './middlewares/authMiddleware.js'; // Import the verifyToken middleware

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// User routes (registration/login accessible without token)
app.use('/api/users', userRoutes);

// Apply the verifyToken middleware to all other routes
app.use(verifyToken); // Token verification for protected routes

// Protected routes
app.use('/products', productRoutes);
app.use('/variants', variantRoutes);
app.use('/orders', orderRoutes);

// Database connection
dbConnection.authenticate()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(error => console.error('Database connection failed:', error));
