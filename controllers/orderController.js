import OrderModel from '../models/Order.js';

// Create Order
export const createOrder = async (req, res) => {
  const { user_id, product_arr, sub_total, delivery_charges, status } = req.body;

  try {
    const newOrder = await OrderModel.create({
      user_id,
      product_arr,
      sub_total,
      delivery_charges,
      status,
    });
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
  }
};

// Get All Orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve orders', error });
  }
};

// Get Single Order
export const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await OrderModel.findByPk(id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve order', error });
  }
};

// Update Order
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    await OrderModel.update(updates, { where: { id } });
    res.status(200).json({ message: 'Order updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order', error });
  }
};

// Delete Order
export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    await OrderModel.destroy({ where: { id } });
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error });
  }
};