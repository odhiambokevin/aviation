import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice";
import worksSlice from "./slices/worksSlice";
import {userSlice} from "./slices/userSlice";
import {incidentsSlice} from "./slices/incidentsSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER} from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit";

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
