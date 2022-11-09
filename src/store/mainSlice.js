import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./actions";

const initialState = { 
    newsData: {},
    loading: false
}

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state, action) => {
            state.loading = true
        });

        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.newsData = action.payload
            state.loading = false
        });
    }
})

export default mainSlice.reducer