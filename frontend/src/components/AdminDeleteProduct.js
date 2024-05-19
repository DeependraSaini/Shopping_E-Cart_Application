import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const AdminDeleteProduct = ({
    onClose,
    productId,
    fetchdata
}) => {

    // State to manage component's data
    const [loading, setLoading] = useState(false);

    // Function to handle delete product request
    const handleDeleteProduct = async () => {
        setLoading(true);

        try {
            const response = await fetch(`${SummaryApi.deleteUploadProduct.url}/${productId}`, {
                method: SummaryApi.deleteUploadProduct.method,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
                
            });

            const responseData = await response.json();

            if (responseData.success) {
                toast.success(responseData.message);
                onClose();
                fetchdata();
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('An error occurred while deleting the product.');
        }

        setLoading(false);
    };

    return (
        <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 rounded w-full max-w-md'>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-bold text-lg'>Delete Product</h2>
                    <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
                        <CgClose />
                    </div>
                </div>

                <div className='p-4'>
                    <p>Are you sure you want to delete this product?</p>
                    <div className='flex justify-end mt-4'>
                        <button
                            className='px-3 py-2 bg-red-600 text-white mr-2 hover:bg-red-700'
                            onClick={handleDeleteProduct}
                            disabled={loading}
                        >
                            {loading ? 'Deleting...' : 'Delete'}
                        </button>
                        <button
                            className='px-3 py-2 bg-gray-400 text-white hover:bg-gray-500'
                            onClick={onClose}
                            disabled={loading}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteProduct;
