import express from 'express';
import {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    bulkUploadProducts
} from '../controllers/productController.js'; 
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.put('/:code', updateProduct);
router.delete('/:code', deleteProduct);
router.post('/bulk-upload', upload.single('file'), bulkUploadProducts);

export default router;
