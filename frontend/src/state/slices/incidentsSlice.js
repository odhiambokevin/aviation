import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import incidentsApi from '../api/incidentsApi';

const initialState = {
    verifiedIncidents: [],
    rawIncidents: [],
    incident: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: 'Initial STATE'
} 

// retrieve unverified incidents
export const allRawIncidents = createAsyncThunk('incidents/getIncidents', async (_,thunkAPI)=>{
        try {
            return await incidentsApi.getIncidents();      
        } catch (error) {
            const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
            
        }
})

// retrieve verified incidents only
export const allVerifiedIncidents = createAsyncThunk('incidents/getVerifiedIncidents', async (_,thunkAPI)=>{
        try {
            return await incidentsApi.getVerifiedIncidents();      
        } catch (error) {
            const message = (error.res && error.res.data && error.res.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
            
        }
})

// verfiy incident
export const verifyIncident = createAsyncThunk('incidents/verifyIncident', async ({incidentid,values},thunkAPI)=>{
        try {
            return await incidentsApi.verifyIncident({incidentid,values});      
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
        [allVerifiedIncidents.pending]: (state,{ payload })=>{
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = 'loading...'
            state.verifiedIncidents = []
        },
        [allVerifiedIncidents.fulfilled]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.verifiedIncidents = payload.results;
            state.message = payload.count + ' results';
        },
        [allVerifiedIncidents.rejected]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = payload;
            state.verifiedIncidents = []
        },

        [allRawIncidents.pending]: (state,{ payload })=>{
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = 'loading...'
            state.rawIncidents = []
        },
        [allRawIncidents.fulfilled]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.rawIncidents = payload.results.features;
            state.message= 'success'
        },
        [allRawIncidents.rejected]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = payload;
            state.rawIncidents = []
        },

        [verifyIncident.pending]: (state,{ payload })=>{
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message= 'loading...'
        },
        [verifyIncident.fulfilled]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.incident = payload;
        },
        [verifyIncident.rejected]: (state,{ payload })=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = payload;
        }
    },
});

export default incidentsSlice