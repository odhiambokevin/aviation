import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice";
import worksSlice from "./slices/worksSlice";
import {regUserSlice} from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        works: worksSlice.reducer,
        user: regUserSlice.reducer,
    },
});
