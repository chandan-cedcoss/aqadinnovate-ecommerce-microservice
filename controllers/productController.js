import ProductModel from '../models/Product.js'; // Ensure this is correct
import ProductVariantModel from '../models/Variant.js'; // Ensure this is correct
import csv from 'csv-parser';
import fs from 'fs';

// Create Product
export const createProduct = async (req, res) => {
  const { title, brand_id, category_id, summary, status, created_by } = req.body;

  try {
    const newProduct = await ProductModel.create({
      title, brand_id, category_id, summary, status, created_by,
    });
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Product creation failed', error });
  }
};

// Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll({
      include: [ProductVariantModel],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve products', error });
  }
};

// Get Single Product
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findByPk(id, {
      include: [ProductVariantModel],
    });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve product', error });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    await ProductModel.update(updates, { where: { id } });
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product', error });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await ProductModel.destroy({ where: { id } });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error });
  }
};

export const bulkUploadProducts = async (req, res) => {
  const results = [];
  const filePath = req.file.path;

  // Read and parse CSV file
  fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
          try {
              // Assuming CSV has headers that match your model fields
              for (const productData of results) {
                  await ProductModel.create(productData);
              }
              res.status(201).json({ message: 'Products uploaded successfully', count: results.length });
          } catch (error) {
              res.status(500).json({ message: 'Bulk upload failed', error });
          }
      })
      .on('error', (error) => {
          res.status(500).json({ message: 'Error reading CSV file', error });
      });
};

