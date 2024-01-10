import { Box } from "@mui/material";
import Dashheader from "./Dashheader";
import LineChart from "./LineChartdash";

const Line = () => {
  return (
    <Box m="20px">
      <Dashheader title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;