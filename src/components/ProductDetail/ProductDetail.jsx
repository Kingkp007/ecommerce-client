import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Img1 from "../../assets/women/women.png";
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { selectItems, setProdId } from '../../redux/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [SingleProduct, setSingleProduct] = useState([]);
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/products/getbyid?id=${id}`)
      const { data: { product } } = response.data;
      if (response.data.success) {
        setSingleProduct(product);
        console.log(product);
      }
    } catch (error) {
      console.log('Error ' + error)
    }
  }

  useEffect(() => {
    // dispatch(setProdId(id));
    getProduct();
  },[id])


  return (
    <>
      <Navbar />
      <div className='grid grid-cols-7 h-screen'>
        {/* Left side Image div */}
        <div className=' col-span-3 h-full'>
          <img src={Img1} alt="Product Image" className='border border-gray-300 mt-10 mx-1' />
          <div className='grid grid-cols-2 h-[50px]'>
            <button className='bg-yellow-500 col-span-1 mx-1 my-1'>Add to Cart</button>
            <button className='bg-orange-500 col-span-1 mx-2 my-1'>Buy Now</button>
          </div>
        </div>
        {/* Right Side Details Div */}
        <div className='col-span-4 h-full mt-10 ml-4'>
          <h1 className='font-semibold text-4xl'>Product Name - {SingleProduct.name}</h1>
          <div className="flex items-center gap-1 mt-4">
            <FaStar className="text-yellow-400 " />
            <span className=''>4.5</span>
            <span className='ml-4 text-gray-900'>809 Ratings & 87 Reviews</span>
          </div>
          <div className=' mt-4'>
            <h4 className='text-xl font-semibold'>Special Price</h4>
            <h2 className='text-3xl font-semibold mt-2'>₹ {SingleProduct.price}</h2>
          </div>
          <div className='mt-4'>
            <h3 className='text-lg font-semibold'>Product Description</h3>
            <h4 className='text-md'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></h4>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductDetail