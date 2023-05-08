import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from "@mui/material/useMediaQuery";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik } from "formik";
import * as yup from "yup";
import Dashheader from "./Dashheader";

const Verification = () => {
  const verifyUser = () => {
          console.log('Verified');
      };

  return (
    <Box m="20px">
      <Dashheader title="VERIFY ACCOUNT" subtitle="Verify Your Account" />
            <Box display="flex" justifyContent="center" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onSubmit={verifyUser}>
                Verify My Account
              </Button>
            </Box>
    </Box>
  );
};

export default Verification;