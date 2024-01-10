import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import worksApi from "../api/worksApi";

const initialState = {
    works: [],
    work: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: 'Initial STATE'
}

// get all work items
// allWorks is an ACTION, works/getAllWorks is a TYPE and the try:catch block holds the PAYLOAD of the ACTION
export const allWorks = createAsyncThunk('works/getAllWorks', async (_,thunkAPI)=>{
    try {
        return await worksApi.getWorks();      
    } catch (error) {
        const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        
    }
})

// Below the ACTION 'allWorks' is added to the slice using the extraReducer(without using the builder PARAM)
export const worksSlice = createSlice({
    name: "works",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [allWorks.pending]: (state, {payload})=>{
            state.isLoading = true;
            state.message = payload;
        },
        [allWorks.fulfilled]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.works = payload.results;
        },
        [allWorks.rejected]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = payload;
        },
    },
});

export default worksSlice