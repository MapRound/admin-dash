// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
// import chat from 'src/store/chat'
// import user from 'src/store/user'
// import email from 'src/store/email'
import cars from 'src/store/listings/cars'

// import transactions from 'src/store/transactions'
// import permissions from 'src/store/apps/permissions'

export const store = configureStore({
  reducer: {
    cars
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
