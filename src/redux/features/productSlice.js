// just a object
// create a big object and its responsible for tracking initial state this state is known to store

import {createSlice, nanoid} from '@reduxjs/toolkit'

// create initial state
const initialState = {
    searchTerm : "",
    items : [],
    currentPage: 1, //for pagination
    totalPages: 1,
    prodId:"",
}

// export slice =- provide name for later reference and provide initialState. Also provide reducers
// there couuld be multiple reducers that will be talking to store 

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers : {
        setItems: (state, action) => {
            state.items = action.payload.items;
            state.totalPages = action.payload.totalPages;
          },
          setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
          },
          setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
          },
          setProdId: (state,action) => {
            state.prodId = action.payload;
          }
    }
})



export const { setItems, setSearchTerm, setCurrentPage, setProdId } = productSlice.actions;
export const selectItems = (state) => state.product.items;
export const selectSearchTerm = (state) => state.product.searchTerm;
export const selectCurrentPage = (state) => state.product.currentPage;
export const selectTotalPages = (state) => state.product.totalPages;
export const selectProdId = (state) => state.product.prodId;

export default productSlice.reducer;
