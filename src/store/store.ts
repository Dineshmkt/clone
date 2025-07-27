import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../features/ProductSlice'
import  NumberReducer from '../features/NumberSlice'
import LocationReducer from '../features/LocationSlice'
import checkoutReducer from '../features/UpdateSlice'
import LoginValueReducer from '../features/updateLoginSlice'
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    contact:NumberReducer,
    location:LocationReducer,
    checkout:checkoutReducer,
    LoginValue:LoginValueReducer,
  },
}
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

