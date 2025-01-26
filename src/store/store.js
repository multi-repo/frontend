// src/store.js

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth/index.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store
