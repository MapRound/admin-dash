// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
// import chat from 'src/store/chat'
// import user from 'src/store/user'
// import email from 'src/store/email'
import cars from 'src/store/listings/cars'
import listings from 'src/store/listings'

// import transactions from 'src/store/transactions'
// import permissions from 'src/store/apps/permissions'

export const store = configureStore({
  reducer: {
    cars,
    listings
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
