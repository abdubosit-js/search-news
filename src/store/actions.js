import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchNews = createAsyncThunk('main/fetchNews',
    async (data) => await api.fetchNews(data)
)