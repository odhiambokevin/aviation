import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import userApi from "../api/userApi";


const initialState = {
    user: {},
    userslist: [],
    access: null,
    refresh: null,
    isAuthenticated: false,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
} 

// registering a user
// registerNewUser is an ACTION, user/registerUser is a TYPE and the try:catch block holds the PAYLOAD of the ACTION
export const registerNewUser = createAsyncThunk('users/registerUser', async (userData,thunkAPI)=>{
    try {
        return await userApi.registerUser(userData);      
    } catch (error) {
        const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        
    }
})

// login for a user
// loginActiveUser is an ACTION, auth/loginUser is a TYPE and the try:catch block holds the PAYLOAD of the ACTION
export const loginActiveUser = createAsyncThunk('users/loginActiveUser', async (userData,thunkAPI)=>{
    try {
        return await userApi.loginUser(userData);      
    } catch (error) {
        const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        
    }
})
  
// retreiving active user
export const activeUser = createAsyncThunk('users/activeUser', async (_,thunkAPI)=>{
    if (localStorage.getItem('access')){
        try {
            return await userApi.getUser();      
        } catch (error) {
            const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
            
        }
    } else {
        console.log('failed')
    }
})
 
// Below the ACTION 'registerNewUser' is added to the slice using the extraReducer(without using the builder PARAM)
export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [registerNewUser.pending]: (state, {payload})=>{
            state.isLoading = true;
            state.message ='Submitting user credentials to server..';
        },
        [registerNewUser.fulfilled]: (state)=>{
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
            localStorage.setItem('refresh', payload.refresh);
            state.access = payload.access;
            state.refresh = payload.refresh;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.isSuccess = true;
            state.message = 'Logged in successfully';
        },
        [loginActiveUser.rejected]: (state,{payload})=>{
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            state.access = null;
            state.refresh = null;
            state.isAuthenticated = false;
            state.message = payload;
        },
        [activeUser.fulfilled]: (state, {payload})=>{
            state.user = payload;
        },
        [activeUser.rejected]: (state, {payload})=>{
            (state.message = payload)
        },
    },
});

export default userSlice