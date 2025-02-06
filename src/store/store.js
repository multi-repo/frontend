// src/store.js

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth/index.js'
import themeReducer from './Theme/slice.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
})

export default store
