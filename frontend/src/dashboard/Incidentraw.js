import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { allRawIncidents } from '../state/slices/incidentsSlice';
import { tokens } from '../theme';
import Dashheader from "./Dashheader";


const Incidentraw = ()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {incidents,isError, isLoading,isSuccess,message} = useSelector((state)=> state.incidents)
	const dispatch = useDispatch();
	const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=> {
		dispatch(allRawIncidents())
	},[dispatch,isError,isLoading, message])
    const [stateload, setIsLoading] = useState(isLoading);
    const Data = incidents
    console.log(Data)
    // const handleCellClick = (params)=> navigate(params.row.incidentid);
    
    const columns = [
        {field:'incidentid', headerName:'Incident ID',HeaderAlign: 'center', flex: 1, valueGetter: (Data) => Data.row.id},
        {field:'recordedby', headerName:'Recorded By',headerAlign:'center', align: 'center',minWidth: 35, valueGetter: (Data) => Data.row.properties.recordedby},
        {field:'airport', headerName:'Airport',headerAlign:'left', align:'left',flex: 1, valueGetter: (Data) => Data.row.properties.airport},
    ]

    useEffect(() => {
		setIsLoading(isLoading);
	}, [isLoading]);
    const [pageSize, setPageSize] = useState(25);
    return ( 
        <Box m="20px">
            <Dashheader title="Unverified Incidents" subtitle="Wildlife Management Unverified Incidents" />

                <Box m="40px 0 0 0" height="75vh" sx={{
                    "& .name-column":{
                        colors: colors.greenAccent[300]
                    }
                }}>                  
                    <DataGrid 
                    loading={isLoading === true?  true : false}
                    rows={Data}
                    getRowId={(row)=> row.id}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeOptions={[25, 50, 100]}
                    onPageSizeChange= {(newPageSize)=> setPageSize(newPageSize)}
                    slots={{toolbar: GridToolbar}}
                    getRowSpacing={params=>({
                        top: params.isFirstVisible ? 0 : 5,
                        bottom: params.isLastVisible ? 0 : 5
                    })}
                    onRowClick={params=> navigate(params.row.id, {state:{from: location}, replace: true})}
                    />
                </Box>
        </Box> 
     ); 
}

export default Incidentraw;