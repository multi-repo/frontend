// src/store.js

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth/index.js'
import authBtnReducer from './AuthBtn/index.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
    authBtn: authBtnReducer,
  },
})

export default store
