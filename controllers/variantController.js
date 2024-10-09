import ProductVariantModel from '../models/Variant.js';

// Create Variant
export const createVariant = async (req, res) => {
  const { product_id, title, images, price_details, created_by } = req.body;

  try {
    const newVariant = await ProductVariantModel.create({
      product_id, title, images, price_details, created_by,
    });
    res.status(201).json({ message: 'Variant created successfully', variant: newVariant });
  } catch (error) {
    res.status(500).json({ message: 'Variant creation failed', error });
  }
};

// Get All Variants
export const getAllVariants = async (req, res) => {
  try {
    const variants = await ProductVariantModel.findAll();
    res.status(200).json(variants);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve variants', error });
  }
};

// Get Single Variant
export const getVariantById = async (req, res) => {
  const { id } = req.params;

  try {
    const variant = await ProductVariantModel.findByPk(id);
    if (!variant) return res.status(404).json({ message: 'Variant not found' });
    res.status(200).json(variant);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve variant', error });
  }
};

// Update Variant
export const updateVariant = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    await ProductVariantModel.update(updates, { where: { id } });
    res.status(200).json({ message: 'Variant updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update variant', error });
  }
};

// Delete Variant
export const deleteVariant = async (req, res) => {
  const { id } = req.params;

  try {
    await ProductVariantModel.destroy({ where: { id } });
    res.status(200).json({ message: 'Variant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete variant', error });
  }
};