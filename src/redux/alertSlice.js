import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,

    reducers: {
        showLoading: (state, action) => {
            state.loading = true
        },
        hideLoading: (state, action) => {
            state.loading = false;
        }
    }
})

export const { showLoading, hideLoading } = alertSlice.actions
export default alertSlice.reducer;
