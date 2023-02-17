import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import userApi from "../api/userApi";


const initialState = {
    user: {
        username:'',
        email:'',
        password:'',
        re_password:''
    },
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: 'Initial STATE'
}

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

// Below the ACTION 'registerNewUser' is added to the slice using the extraReducer(without using the builder PARAM)
 
export const regUserSlice = createSlice({
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
            state.user = payload.userData;
        },
        [registerNewUser.rejected]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = payload;
        },
    },
});
