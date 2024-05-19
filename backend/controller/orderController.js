// orderController.js

const Order = require('./orderModel');

// Create a new order

// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// Other CRUD operations (updateOrder, deleteOrder) can be added similarly

module.exports = { getAllOrders };
