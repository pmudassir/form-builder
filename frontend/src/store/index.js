import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './store/dataSlice'

const store = configureStore({
    reducer: {
        data: dataSlice
    }
})

export default store