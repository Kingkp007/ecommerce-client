import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    category: "Women",
    rating: 5.0,
    price: "500",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    category: "Women",
    rating: 4.5,
    price: "850",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    category: "Men",
    rating: 4.7,
    price: "1000",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    category: "Kids",
    rating: 4.4,
    price: "750",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    category: "Men",
    rating: 4.5,
    price: "399",
    aosDelay: "800",
  },
];

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <ProductCard key={data.id} id={data.id} img={data.img} title={data.title} rating={data.rating} category={data.category} price={data.price} aosDelay={data.aosDelay} />
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button onClick={() => {navigate("/all-products")}} className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              See All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;