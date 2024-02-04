import React, { useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import axios from "axios"


// name photo price stock category timestamp

const ProductListing = () => {
    const [formField, setFormField] = useState({category:'',
    photo:null,
    price:'',
    productname:'',
    stock:'',
});

const handleFileChange = (event) => {
    setFormField({
        ...formField,
        photo: event.target.files[0],
      })
  };

    // const uploadData = async(req,res) => {
        
    // }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formField)
        try {
            const formData = new FormData();
            formData.append('productname', formField.productname);
            formData.append('stock', formField.stock);
            formData.append('category', formField.category);
            formData.append('price', formField.price);
            formData.append('file', formField.photo);

            const result = await axios.post(
                "http://localhost:8080/api/v1/products/new-product",
                formData,
                {
                  headers: { "Content-Type": "multipart/form-data" },
                }
              );
              const dt = await result.data;
              console.log('Form submitted successfully:',dt);
              setFormField({
                category:'',
                photo:null,
                price:'',
                productname:'',
                stock:'',
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormField({ ...formField, [name]: value });
        // console.log(formField)
    }

    return (
        <div className="mx-20">
            <form action="" onSubmit={handleSubmit}>
                <div className="space-y-12 mb-10">
                    <div className="border-b border-gray-900 border-opacity-10 pb-12 flex items-center">

                        {/* name */}
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="productname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Product Name/</span>
                                        <input
                                            type="text"
                                            name="productname"
                                            id="productname"
                                            autoComplete="productname"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder=""
                                            onChange={handleInputChange}
                                            value={formField.productname}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* price */}
                            <div className="sm:col-span-4">
                                <label htmlFor="productname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price(₹)
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Price.../</span>
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            autoComplete="price"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder=""
                                            onChange={handleInputChange}
                                            value={formField.price}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* stock */}
                            <div className="sm:col-span-4">
                                <label htmlFor="productname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Stock
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Stock</span>
                                        <input
                                            type="text"
                                            name="stock"
                                            id="stock"
                                            autoComplete="stock"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder=""
                                            onChange={handleInputChange}
                                            value={formField.stock}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* category */}
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Category
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="category"
                                        name="category"
                                        autoComplete="category-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        onChange={handleInputChange}
                                        value={formField.category}
                                    >
                                        <option name="none" >Select</option>
                                        <option name="electronics" >Electronics</option>
                                        <option name="men">Men </option>
                                        <option name="women">Women</option>
                                        <option name="kids">Kids</option>
                                        <option name="books">Books</option>
                                    </select>
                                </div>
                            </div>
                            {/* upload image */}
                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input accept="application/jpeg" id="file" name="file" type="file" className="sr-only" onChange={handleFileChange} required />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProductListing