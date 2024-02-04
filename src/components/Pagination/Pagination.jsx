import React, { useState } from 'react'



const Pagination = ({currPage, totalPages}) => {
  const [currentPage,setCurrentPage] = useState(1)
  return (
    <div className="flex justify-between mt-4">
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


  )
}

export default Pagination