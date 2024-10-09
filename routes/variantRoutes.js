import express from 'express';
import {
  createVariant,
  getAllVariants,
  getVariantById,
  updateVariant,
  deleteVariant,
} from '../controllers/variantController.js';

const router = express.Router();

router.post('/', createVariant);
router.get('/', getAllVariants);
router.get('/:id', getVariantById);
router.put('/:id', updateVariant);
router.delete('/:id', deleteVariant);

export default router;
