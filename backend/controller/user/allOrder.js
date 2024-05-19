const orderModel = require("../../models/orderModel");

async function allOrders(req, res) {
    try {
        // Assuming you have some sort of authentication middleware that extracts userId from the request
        console.log("userId for allOrders:", req.userId);

        // Retrieve all orders from the database
        const allOrders = await orderModel.find();

        // Send JSON response with the retrieved orders
        res.json({
            message: "All Orders",
            data: allOrders,
            success: true,
            error: false
        });
    } catch (err) {
        // If an error occurs, send an error response
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = allOrders;
