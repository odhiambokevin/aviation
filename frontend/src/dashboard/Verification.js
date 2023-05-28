import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
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
import { useNavigate, useParams, redirect } from "react-router-dom";
// import { activateNewUser } from "../state/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Verification = () => {
  // const {users,isError, isLoading,isSuccess,message} = useSelector((state)=> state.users)
  const {uid, token} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const activateUser = () => {
    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  }
    axios.post('http://127.0.0.1:8000/auth/users/activation/', {uid: uid, token: token})
    .then(console.log(uid, token,'Verified')
    )
    .catch(err => {alert(err.response.data)}); 
    
      };

  return (
    <Box m="20px">
      <Dashheader title="VERIFY ACCOUNT" subtitle="Verify Your Account" />
            <Box display="flex" justifyContent="center" mt="20px">
              <Button type="button" color="secondary" variant="contained" onClick={activateUser}>
                Verify My Account
              </Button>
            </Box>
    </Box>
  );
};

export default Verification;