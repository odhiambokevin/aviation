import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice";
import worksSlice from "./slices/worksSlice";
import {userSlice} from "./slices/userSlice";
import incidentsSlice from "./slices/incidentsSlice";

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        works: worksSlice.reducer,
        users: userSlice.reducer,
        incidents: incidentsSlice.reducer,
    },
});
