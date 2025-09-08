import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    open: false
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
        },
        toggleOpen: (state, action) => { state.open = !state.open }
    }
})

export const { showLoading, hideLoading, toggleOpen } = alertSlice.actions
export default alertSlice.reducer;
