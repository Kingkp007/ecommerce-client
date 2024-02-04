import React from 'react';

const Checkout = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Shipping Details Form */}
      <div className="w-1/2 bg-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-600">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Confirm Shipping
          </button>
        </form>
      </div>

      {/* Right side - Order Summary */}
      <div className="w-1/2 bg-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex items-center mb-4">
          <img
            src="https://placekitten.com/100/100"
            alt="Product"
            className="mr-4 rounded"
          />
          <div>
            <p className="font-semibold">Product Name</p>
            <p className="text-gray-600">$19.99</p>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">
            Quantity
          </label>
          <select
            id="quantity"
            name="quantity"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          >
            {[...Array(10).keys()].map((number) => (
              <option key={number + 1} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
