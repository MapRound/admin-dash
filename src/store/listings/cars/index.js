import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Users
export const fetchData = createAsyncThunk('cars/fetchData', async params => {
  const response = await axios.get('localhost:5556/api/v1/listings?type="car', {
    params
  })

  return response.data
})

// ** Add User
// export const addUser = createAsyncThunk('appUsers/addUser', async (data, { getState, dispatch }) => {
//   const response = await axios.post('/apps/users/add-user', {
//     data
//   })
//   dispatch(fetchData(getState().user.params))

//   return response.data
// })

// // ** Delete User
// export const deleteUser = createAsyncThunk('appUsers/deleteUser', async (id, { getState, dispatch }) => {
//   const response = await axios.delete('/apps/users/delete', {
//     data: id
//   })
//   dispatch(fetchData(getState().user.params))

//   return response.data
// })

export const carsSlice = createSlice({
  name: 'carListings',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.cars
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default carsSlice.reducer
