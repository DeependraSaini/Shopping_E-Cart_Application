const ProductModel = require("../../models/productModel");

const deleteUploadProduct = async (req, res) => {
    try {
        // Extract the product ID from the request parameters
        const currentproductId = req.productId;
        const findProductId = req.body._id

        // Use the ProductModel to delete the product from the database
        const deletedProduct = await ProductModel.findByIdAndDelete({_id : findProductId});

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Product not found or already deleted",
            });
        }

        // Return a success response if the product is successfully deleted
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: deletedProduct,
        });
    } catch (error) {
        // Return an error response if any error occurs during the deletion process
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal Server Error",
        });
    }
};

module.exports = deleteUploadProduct;
