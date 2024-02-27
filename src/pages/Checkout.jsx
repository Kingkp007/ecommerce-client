import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../redux/features/cartSlice'
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCartItems()
  }, [])

  const userId = localStorage.getItem("userId")

  const success = () => {
    toast.success(`Oreder Placed`, {
      position: 'top-center', // Set position to top center
    });
  };

  const deleteItem = () => {
    toast.success(`Item Deleted`, {
      position: 'top-center', // Set position to top center
    });
  }
  const deleteFail = () => {
    toast.error(`Somethinng went wrong`, {
      position: 'top-center', // Set position to top center
    });
  }

  const getCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/orders/getItems?userId=${userId}`)
      if (response.data.success) {
        setCartItems(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log('Error '+ error)
    }
  }

  const handleDelete = async(prodId) =>{
    try {
      // alert(prodId);
    const response = await axios.delete(`http://localhost:8080/api/v1/orders/delete-item?prodId=${prodId}&userId=${userId}`)
    if(response.data.success){
      // alert(`${prodId} deleted successfully`)
      window.location.reload()
      deleteItem();
      // const newArr = cartItems.filter((ele) => ele._id != prodId);
      // setCartItems(newArr);
    }
    } catch (error) {
      console.log(error)
      deleteFail();
    }

  }

  return (
    <div className="flex h-screen">
      {/* Right side - Order Summary */}
      <div className="w-full h-fit bg-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cartItems.map((product) => (
          <div key={product._id} className="flex items-center mb-4">    
            <img
              src={product.img}
              alt="Product"
              className="mr-4 rounded h-[100px] w-[70px]"
            />
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
            <button
              className="ml-auto text-red-600 hover:text-red-800 text-2xl"
              onClick={() => handleDelete(product._id)}
            >
              {/* Dustbin logo or any other icon for remove */}
              <MdDelete />
            </button>
          </div>
        ))}

        <div className="bg-gray-100 p-4 rounded-md shadow-md">

          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Subtotal:</span>
            <span className="font-bold text-gray-800">₹ {
               cartItems.reduce((sum, item) => {
                  return sum += item.price
              }, 0)}</span>
          </div>


          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Shipping Charges:</span>
            <span className="font-bold text-gray-800">₹ 110</span>
          </div>


          <div className="flex justify-between">
            <span className="text-xl font-bold">Total Payable Amount:</span>
            <span className="text-xl font-bold text-primary">₹ {
               cartItems.reduce((sum, item) => {
                  return sum += item.price
              }, 110)}</span>
          </div>
        </div>

      <div className='flex justify-start mt-2'>
      <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => {success(); navigate("/")}}
        >
          Confirm Order
        </button>
        <button
          className=" ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
      </div>
    </div>
  );
};

export default Checkout;
