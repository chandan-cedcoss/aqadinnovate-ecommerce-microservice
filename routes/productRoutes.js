import express from 'express';
import {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    bulkUploadProducts
} from '../controllers/productController.js'; // Add .js extension
import upload from '../middlewares/upload.js'; // Ensure this also has .js

const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.put('/:code', updateProduct);
router.delete('/:code', deleteProduct);
router.post('/bulk-upload', upload.single('file'), bulkUploadProducts);

export default router;
