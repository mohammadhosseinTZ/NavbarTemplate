import { createSlice } from '@reduxjs/toolkit'

export const colorChangingSlice = createSlice({
  name: 'colorChanging',
  initialState: {
    text :"",
    border:"",
    background:""
  },
  reducers: {
    textColor: (state , action) => {
     
      state.text = action.payload
    },
    borderColor: (state , action) => {
      state.border = action.payload
    },
    backgroundColor:(state , action)=>{
      state.background = action.payload
    }
    
  }
})


export const { textColor, borderColor ,backgroundColor} = colorChangingSlice.actions

export default colorChangingSlice.reducer