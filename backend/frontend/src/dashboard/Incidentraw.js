import { useParams, useNavigate,useLocation, Link } from 'react-router-dom';
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
    const location = useLocation();
    useEffect(()=> {
		dispatch(allRawIncidents())
	},[dispatch,isError, message])
    const [stateload, setIsLoading] = useState(isLoading);
    const Data = incidents
    // const handleCellClick = (params)=> navigate(params.row.incidentid);
    const columns = [
        {field:'incidentid', headerName:'Incident ID',HeaderAlign: 'center', flex: 1},
        {field:'recordedby', headerName:'Recorded By',headerAlign:'center', align: 'center',minWidth: 35},
        {field:'airport', headerName:'Airport',headerAlign:'left', align: 'left',flex: 1},
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
                    getRowId={(row)=> row.incidentid}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeOptions={[25, 50, 100]}
                    onPageSizeChange= {(newPageSize)=> setPageSize(newPageSize)}
                    slots={{toolbar: GridToolbar}}
                    getRowSpacing={params=>({
                        top: params.isFirstVisible ? 0 : 5,
                        bottom: params.isLastVisible ? 0 : 5
                    })}
                    onRowClick={params=> navigate(params.row.incidentid, {state:{from: location}, replace: true})}
                    />
                </Box>
        </Box> 
     );
}

export default Incidentraw;