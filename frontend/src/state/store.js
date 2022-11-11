import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice";
import worksSlice from "./slices/worksSlice";

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        works: worksSlice.reducer,
    },
});
