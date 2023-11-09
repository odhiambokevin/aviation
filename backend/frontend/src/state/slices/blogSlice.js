import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import blogApi from "../api/blogApi";

const initialState = {
    blogs: [],
    blog: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

// get all blogs
export const allBlogs = createAsyncThunk('blogs/getAllBlogs', async (_,thunkAPI)=>{
    try {
        return await blogApi.getBlogs();      
    } catch (error) {
        const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        
    }
})

export const blogSlice = createSlice({
    name: "blogs",
    initialState: initialState,
    reducers: {
        reset: (state)=> initialState
    },
    extraReducers: (builder)=>{
        builder
            .addCase(allBlogs.pending, (state)=>{
                state.isLoading = true;
                state.message = ''
            })
            .addCase(allBlogs.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = action.payload.results;
            })
            .addCase(allBlogs.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

// actions generated from each reducer function
export const { reset } = blogSlice.actions;

//export as reducer
export default blogSlice.reducer;