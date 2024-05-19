import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import AdminDeleteProduct from './AdminDeleteProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const AdminProductCard = ({
    data,
    fetchdata,
}) => {
    const [editProduct, setEditProduct] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(false);

    const handleDeleteProduct = async () => {
        try {
            const response = await fetch(`${SummaryApi.deleteUploadProduct.url}/${data._id}`, {
                method: SummaryApi.deleteUploadProduct.method,
                credentials: 'include',
            });

            const responseData = await response.json();

            if (responseData.success) {
                toast.success(responseData.message);
                fetchdata(); // Fetch updated data after deletion
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('An error occurred while deleting the product.');
        }
    };

    return (
        <div className='bg-white p-4 rounded '>
            <div className='w-40'>
                <div className='w-32 h-32 flex justify-center items-center'>
                    <img src={data?.productImage[0]} className='mx-auto object-fill h-full' alt={data.productName} />
                </div>
                <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>
                <p className='font-semibold'>{displayINRCurrency(data.sellingPrice)}</p>
                <div className='flex justify-end items-center mt-2'>
                    <div className='w-fit ml-2 p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={() => setEditProduct(true)}>
                        <MdModeEditOutline />
                    </div>
                    
                </div>
            </div>
            {editProduct && (
                <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
            )}
            {deleteProduct && (
                <AdminDeleteProduct productId={data._id} onClose={() => setDeleteProduct(false)} fetchdata={fetchdata} />
            )}
        </div>
    );
};

export default AdminProductCard;
