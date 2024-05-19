// orderModel.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;
