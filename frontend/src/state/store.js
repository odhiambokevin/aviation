import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import blogReducer from "./slices/blogSlice";
import { incidentsSlice } from "./slices/incidentsSlice";
import { userSlice } from "./slices/userSlice";
import worksSlice from "./slices/worksSlice";

const persistConfig = {
    key : "root",
    storage
};

const reducer = combineReducers({
    blogs: blogReducer,
    works: worksSlice.reducer,
    users: userSlice.reducer,
    incidents: incidentsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    /*removes the serializable error that comes with redux-persist
    by ignoring below actions without overriding default middleware*/
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER]
        }
    })
});
