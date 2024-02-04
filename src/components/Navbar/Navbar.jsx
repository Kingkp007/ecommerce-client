import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6"
import { LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectSearchTerm, setCurrentPage } from '../../redux/features/productSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector(selectSearchTerm);


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newSearchTerm = formData.get('search');
    dispatch(setSearchTerm(newSearchTerm));

    // dispatch(setSearchTerm(e.target.value));
    // console.log(e.target.value);
  }

  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    alert('Logged Out Successfully')
    navigate("/login");
  };

  const Menu = [
    {
      id: 1,
      link: "/",
      name: "Electronics"
    },
    {
      id: 2,
      link: "/",
      name: "Men"
    },
    {
      id: 3,
      link: "/",
      name: "Women"
    },
    {
      id: 4,
      link: "/",
      name: "Kids"
    },
    {
      id: 5,
      link: "/",
      name: "Books"
    },
  ]

  return (

    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="Logo" className="w-10" />
              KP-ECOM
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search by Product"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                  // value={searchTerm}
                  defaultValue={searchTerm}
                  onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                // onChange={(e) => {
                //   setQuery(e.target.value); 
                //   console.log(e.target.value)
                //   }}
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 right-3 bg-transparent border-none cursor-pointer"
                >
                  <IoMdSearch className="text-gray-500 group-hover:text-primary" />
                </button>
                {/* <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" /> */}
              </form>
            </div>

            {/* order button */}
            <button
              onClick={() => alert("Order clicked")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <span className=" bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                0
              </span>
            </button>

            {/* logout button */}
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <LuLogOut className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>



            {/* Darkmode Switch */}
            {/* <div>
              <DarkMode />
            </div> */}
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {Menu.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar