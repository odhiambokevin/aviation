import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import incidentsApi from '../api/incidentsApi';

const initialState = {
    incidents: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: 'Initial STATE'
}

// retreiving active user
export const allRawIncidents = createAsyncThunk('incidents/getIncidents', async (_,thunkAPI)=>{
        try {
            return await incidentsApi.getIncidents();      
        } catch (error) {
            const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
            
        }
})
 
// Below the ACTION 'registerNewUser' is added to the slice using the extraReducer(without using the builder PARAM)
export const incidentsSlice = createSlice({
    name: "incidents",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [allRawIncidents.pending]: (state, {payload})=>{
            state.isLoading = true;
            state.message = payload;
        },
        [allRawIncidents.fulfilled]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.incidents = payload.results.features;
        },
        [allRawIncidents.rejected]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = payload;
        }
    },
});

export default incidentsSlice