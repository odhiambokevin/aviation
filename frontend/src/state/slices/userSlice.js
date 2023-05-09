import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import userApi from "../api/userApi";


const initialState = {
    user: {},
    users: [],
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    // uid: localStorage.getItem('uid'),
    // token: localStorage.getItem('token'),
    isAuthenticated: false,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: 'Initial STATE'
} 

// retreiving active user
export const activeUser = createAsyncThunk('user/activeUser', async (_,thunkAPI)=>{
    if (localStorage.getItem('access'));
        try {
            return await userApi.getUser();      
        } catch (error) {
            const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
            
        }
})
 
// registering a user
// registerNewUser is an ACTION, user/registerUser is a TYPE and the try:catch block holds the PAYLOAD of the ACTION
export const registerNewUser = createAsyncThunk('user/registerUser', async (userData,thunkAPI)=>{
    try {
        return await userApi.registerUser(userData);      
    } catch (error) {
        const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        
    }
})

// activate registered user
// export const activateNewUser = createAsyncThunk('user/activateUser', async (load,thunkAPI)=>{
//     try {
//         return await userApi.activateUser(load);      
//     } catch (error) {
//         const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
//         return thunkAPI.rejectWithValue(message);
        
//     }
// })
// login for a user
// loginActiveUser is an ACTION, auth/loginUser is a TYPE and the try:catch block holds the PAYLOAD of the ACTION
export const loginActiveUser = createAsyncThunk('auth/loginUser', async (userData,thunkAPI)=>{
    try {
        return await userApi.loginUser(userData);      
    } catch (error) {
        const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        
    }
})
 
// Below the ACTION 'registerNewUser' is added to the slice using the extraReducer(without using the builder PARAM)
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [registerNewUser.pending]: (state, {payload})=>{
            state.isLoading = true;
            state.message = payload;
        },
        [registerNewUser.fulfilled]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = true;
        },
        [registerNewUser.rejected]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = payload;
        },
        [loginActiveUser.fulfilled]: (state, {payload})=>{
            localStorage.setItem('access', payload.access);
            state.access = payload.access;
            state.refresh = payload.refresh;
            state.isAuthenticated = true;
        },
        [loginActiveUser.rejected]: (state, {payload})=>{
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            state.access = null;
            state.refresh = null;
            state.isAuthenticated = false;
            state.message = payload;
        },
        // [activateNewUser.pending]: (state, {payload})=>{
        //     localStorage.setItem('uid', payload.uid);
        //     localStorage.setItem('token', payload.token);
        //     state.message = payload;
        // },
        // [activateNewUser.fulfilled]: (state, {payload})=>{
        //     console.log('activated');
        // },
        // [activateNewUser.rejected]: (state, {payload})=>{
        //     state.messaged = payload;
        // },
        [activeUser.success]: (state, {payload})=>{
            state.user = payload;
        },
        [activeUser.rejected]: (state, {payload})=>{
            state.user = null;
            state.message = payload;
        },
    },
});
