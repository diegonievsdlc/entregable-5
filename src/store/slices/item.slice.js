import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
		name: 'item',
    initialState: 16,
    reducers: {
      getItem: (state, action) => action.payload 
    }
})

export const {getItem} = itemSlice.actions
export default itemSlice.reducer;