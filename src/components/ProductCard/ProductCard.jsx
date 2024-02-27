import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProdId, selectProdId } from "../../redux/features/productSlice"

const ProductCard = ({id, img, title, rating,price,category,aosDelay}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handliClick= () => {
    dispatch(setProdId(id));
    // alert(`You will be seeing product with id ${id}`)
    navigate(`/prod-dtl/${id}`);
  }

  return (
    <div>
        <div
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                key={id}
                className="space-y-3"
              >
                <img
                  src={img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                <h3 className="font-bold">{category}</h3>
                  <h2 className="font-semibold">{title}</h2>
                  <p className="text-sm text-gray-600">Price : ₹ {price}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{rating}</span>
                  </div>
                </div>
                <button 
                className='flex justify-center bg-primary/40 hover:bg-primary/60 rounded-md w-full'
                onClick={handliClick}
                ><h3 className=''>See Details</h3></button>
              </div>
    </div>
  )
}

export default ProductCard