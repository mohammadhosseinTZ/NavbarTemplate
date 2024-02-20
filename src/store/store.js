import { configureStore } from '@reduxjs/toolkit'
import colorChangingReducer from './slice/colorChangingSlice'
export default configureStore({
  reducer: {
    colorChanging : colorChangingReducer
  }
})