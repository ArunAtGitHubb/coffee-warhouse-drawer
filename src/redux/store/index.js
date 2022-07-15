import {configureStore} from '@reduxjs/toolkit'
import { reducer } from '../reducers/reducers'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
import logger from 'redux-logger'

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store =  configureStore({
    reducer: persistedReducer,
    middleware: [logger],
    devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store)