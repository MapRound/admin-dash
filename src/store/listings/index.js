import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_URL : 'http://localhost:5556/api/v1'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Listings
export const fetchData = createAsyncThunk('listings/fetchData', async params => {
  const response = await axios.get(`${baseUrl}/listings`)
  console.log('fetching  ddata', { response })

  // dispatch(fetchData())

  return response.data.data
})

export const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    listings: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    console.log('ddr'),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        console.log('Reducer action', action)
        state.listings = action.payload
        state.total = action.payload.length

        state.allData = action.payload
      })
  }
})

export default listingsSlice.reducer
