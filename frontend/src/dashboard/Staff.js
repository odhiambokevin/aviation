import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../theme';
import Dashheader from "./Dashheader";


const Data = [
    {
        id: 1,
        name:'Brad Pit',
        email:'brad@pit.com',
        age: 35,
        phone:'072035489228',
        designation:'Admin'
    },
    {
        id: 2,
        name:'Felix Doe',
        email:'felix@doe.com',
        age: 45,
        phone:'254786441',
        designation:'Manager'
    },
    {
        id: 3,
        name:'Jane Doe',
        email:'jane@doe.com',
        age:28,
        phone:'98541225',
        designation:'Officer'
    },
]

const Staff = ()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field:'id', headerName:'ID'},
        {field:'name', headerName:'Name', flex: 1, cellClassName:'name-column'},
        {field:'email', headerName:'Email', flex: 1},
        {field:'age', headerName:'Age', type: 'number', headerAlign:'left', align: 'left'},
        {field:'phone', headerName:'Phone Number', flex: 1},
        {field:'designation',
        headerName:'Designation',
        renderCell: ({row: {designation}})=>{
            return(
                <Box width="60%" m="0 auto" p="5px" display="flex" justifyContent="center" backgroundColor={
                    designation === 'Admin' ? colors.greenAccent[600] : colors.greenAccent[700]

                } borderRadius="4px" >
                    {designation === "Admin" && <AdminPanelSettingsOutlinedIcon />}
                    {designation === "Manager" && <AdminPanelSettingsOutlinedIcon />}
                    {designation === "Officer" && <AdminPanelSettingsOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ml: '5px'}}>
                        {designation}
                    </Typography>
                </Box>
            )

        }
    }
    ]

    return ( 
        <Box m="20px">
            <Dashheader title="Staff" subtitle="Wildlife Management Staff" />
                <Box m="40px 0 0 0" height="75vh" sx={{
                    "& .name-column":{
                        colors: colors.greenAccent[300]
                    }
                }}>
                    <DataGrid 
                    rows={Data}
                    columns={columns}
                    />
                </Box>
        </Box> 
     );
}

export default Staff;