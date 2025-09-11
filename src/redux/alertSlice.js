import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    open: false,
    settingsOpen: false,
    toggleSideNav: false,
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
        toggleSearch: (state, action) => { state.open = !state.open },
        toggleSetting: (state, action) => { state.settingsOpen = !state.settingsOpen },
        toggleSideNav: (state, action) => { state.toggleSideNav = !state.toggleSideNav}
    }
})

export const { showLoading, hideLoading, toggleSearch,
     toggleSetting, toggleSideNav } = alertSlice.actions
export default alertSlice.reducer;
