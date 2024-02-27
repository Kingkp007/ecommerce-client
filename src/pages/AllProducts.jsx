import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios';
import ProductCard from '../components/ProductCard/ProductCard';
import Img2 from "../assets/women/women2.jpg";
// import Pagination from '../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, selectItems, selectCurrentPage, selectSearchTerm, selectProdId, selectCtgry } from '../redux/features/productSlice';



const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  // const currentPage = useSelector(selectCurrentPage);
  const searchTerm = useSelector(selectSearchTerm);
  const category = useSelector(selectCtgry);
  console.log(category);
  // const prodId = useSelector(selectProdId)
  

  useEffect(() => {
    getAllProducts();
  }, [currentPage, dispatch,searchTerm, category])

  // get All Products
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/products/get-prod?page=${currentPage}&category=${category}&search=${searchTerm}`);
      const { data: { products, totalPages } } = response.data;
      if (response.data.success) {
        // console.log();
        setAllProducts(products);
        setTotalPages(totalPages);
        dispatch(setItems(products));
      }
    } catch (error) {
      console.log(error)
    }

  }




  const handleRating = () => {
    let num = Math.random() * 4 + 1; // Generates a number between 1 and 5
    num = Math.round(num * 10) / 10; // Rounds off to one decimal point
    return num;
  }


  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-4 mt-8'>
        <div className='col-span-1 h-[400px] border border-black p-4 ml-10 rounded-lg'>
          <div className='flex justify-center bg-primary/40 rounded-md'><h1 className='font-bold'>Apply Filter</h1></div>
          <div className='mt-6 flex justify-center'><h2>Sort By Price</h2></div>
          <div className='flex justify-center'>
            <select>
              <option>Select</option>
              <option>Lower to Higher</option>
              <option>Higher to Lower</option>
            </select></div>
        </div>
        <div className='col-span-3' >
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5  mb-8">
            {allProducts.map((ele) => {
              return (<ProductCard key={ele._id} id={ele._id} price={ele.price} category={ele.category} title={ele.name} aosDelay="400" img={ele.img} rating={handleRating()} />)
            })}
          </div>
        </div>
      </div>
      {/* <Pagination currPage={page} totalPages={totalPages} /> */}
      {/* Pagination code below */}

<div className='grid grid-cols-4'>
<div className='col-span-1'></div>
<div className='col-span-1'></div>
<div className='col-span-1'>
<div className="flex justify-between mt-4 mb-4">
    <button
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white rounded`}
    >
      Previous Page
    </button>
    <span className="text-lg font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>
    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white rounded`}
    >
      Next Page
    </button>
  </div>
</div>
<div className='col-span-1'></div>
</div>
    


    </div>
  )
}

export default AllProducts