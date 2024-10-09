import express from 'express';
import dbConnection from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import variantRoutes from './routes/variantRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/products', productRoutes);
app.use('/variants', variantRoutes);
app.use('/orders', orderRoutes);

dbConnection.authenticate()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(error => console.error('Database connection failed:', error));
