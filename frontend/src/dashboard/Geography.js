import { Box, useTheme } from "@mui/material";
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { allRawIncidents } from '../state/slices/incidentsSlice';
import { tokens } from "../theme";
import Dashheader from "./Dashheader";


const Geography = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);
  const {incidents,isError, isLoading,isSuccess,message} = useSelector((state)=> state.incidents)
  const position = [0.36, 36.635]
  const points = [
    {
      code:[0.32, 36.695],
      popUp: "I'm 1"
    },
    {
      code:[0.35, 36.55],
      popUp: "I'm 2"
    },
    {
      code:[0.33, 36.43],
      popUp: "I'm 3"
    },
  ]
  const myIcon = new Icon({
    iconUrl: require('./pin.png'),
    iconSize: [12,12]
  })

  useEffect(()=> {dispatch(allRawIncidents())},[dispatch,isError, message])
  console.log(incidents);

  return (
    <Box m="20px">
      <Dashheader title="Geography" subtitle="Mapped Data" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        
          <MapContainer center={position} zoom={7}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {
              incidents.map(incident=>(
                <MarkerClusterGroup>
                <Marker position={[incident.geometry.coordinates[1],incident.geometry.coordinates[0] ]} icon={myIcon} key={incident.id}>
                  <Popup>
                    <p>{incident.id}</p>
                    <p>{incident.properties.airport}</p>
                  </Popup>
                </Marker>
                </MarkerClusterGroup>
              ))
            }  */}
         </MapContainer>
      </Box>
    </Box>
  );
};

export default Geography;