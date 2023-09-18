import { Box, useTheme } from "@mui/material";
import GeographyChart from "./GeographyChart";
import Dashheader from "./Dashheader";
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';
import { tokens } from "../theme";
import 'leaflet/dist/leaflet.css';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const position = [0.36, 36.635]
  return (
    <Box m="20px">
      <Dashheader title="Geography" subtitle="Mapped Data" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        
          <MapContainer center={position} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
         </MapContainer>
       
      </Box>
    </Box>
  );
};

export default Geography;