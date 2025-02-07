import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth/index.js'
import themeReducer from './Theme/slice.js'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'theme',
  storage,
}

const persistedThemeReducer = persistReducer(persistConfig, themeReducer)

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: persistedThemeReducer,
  },
})

export const persistor = persistStore(store)
