import { NavLink, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Box, Typography, useTheme } from "@mui/material";
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {tokens} from '../theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Dashheader from "./Dashheader";
import { allRawIncidents } from '../state/slices/incidentsSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const Incidentraw = ()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {incidents,isError, isLoading,isSuccess,message} = useSelector((state)=> state.incidents)
	const dispatch = useDispatch();
	const navigate = useNavigate();
    useEffect(()=> {
		dispatch(allRawIncidents())
	},[dispatch,isError, message])
    const [stateload, setIsLoading] = useState(isLoading);
    const Data = incidents
    const handleCellClick = (Data)=>{
        navigate(`incidentsl1/${Data.row.id}`);
    }
    const columns = [
        {field:'id', headerName:'ID', minWidth: 35},
        {field:'recordedby', headerName:'Recorded By', valueGetter: (Data)=> Data.row.properties.recordedby},
        {field:'incidentdate', headerName:'Date', cellClassName:'name-column',
        valueGetter: (Data)=>{
            let day = new Date().getDate(Data.row.properties.incidentdate)
            let month = new Date().getMonth(Data.row.properties.incidentdate)
            let year = new Date().getFullYear(Data.row.properties.incidentdate)
            let date = day + '/' + month + '/' + year
            return date
        }},
        {field:'precipitation', headerName:'Precipitation',HeaderAlign: 'center', valueGetter: (Data)=> Data.row.properties.precipitation},
        {field:'airport', headerName:'Airport',headerAlign:'left', align: 'left', valueGetter: (Data)=> Data.row.properties.airport},
        {field:'county', headerName:'County', valueGetter: (Data)=> Data.row.properties.county},
        {field:'locationremarks', headerName:'Location Remarks',flex: 1, valueGetter: (Data)=> Data.row.properties.locationremarks},
        {field:'speciestype', headerName:'Species Type', valueGetter: (Data)=> Data.row.properties.speciestype},
        {field:'speciesname', headerName:'Species Name', valueGetter: (Data)=> Data.row.properties.speciesname},
        {field:'incidentremarks', headerName:'Remarks',flex: 1,HeaderAlign: 'center', valueGetter: (Data)=> Data.row.properties.incidentremarks},
    ]
    useEffect(() => {
		setIsLoading(isLoading);
	}, [isLoading]);
    const [pageSize, setPageSize] = useState(25);
    return ( 
        <Box m="20px">
            <Dashheader title="Unverified Incidents" subtitle="Wildlife Management L0 Incidents" />

                <Box m="40px 0 0 0" height="75vh" sx={{
                    "& .name-column":{
                        colors: colors.greenAccent[300]
                    }
                }}>
                    
                    <DataGrid 
                    loading={isLoading == true?  true : false}
                    rows={Data}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeOptions={[25, 50, 100]}
                    onPageSizeChange= {(newPageSize)=> setPageSize(newPageSize)}
                    slots={{toolbar: GridToolbar}}
                    onCellClick={handleCellClick}
                    />
                </Box>
        </Box> 
     );
}

export default Incidentraw;