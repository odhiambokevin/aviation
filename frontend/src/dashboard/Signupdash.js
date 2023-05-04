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

const Signupdash = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = () => setShowPassword((show) => !show);

  return (
    <Box m="20px">
      <Dashheader title="SIGN UP" subtitle="Create a New Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={submitSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  fullWidth
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ gridColumn: "span 2" }} 
                  />
              </FormControl>

              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-re-password"> Reenter Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-re-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password Reenter"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.re_password}
                  fullWidth
                  name="re_password"
                  error={!!touched.re_password && !!errors.re_password}
                  helperText={touched.re_password && errors.re_password}
                  sx={{ gridColumn: "span 2" }} 
                  />
              </FormControl>             
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create Profile
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const submitSchema = yup.object().shape({
  username: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  re_password: yup.string().label('confirm password').required().min(8, 'Must be at least 8 characters').oneOf([yup.ref('password'), null], 'Passwords must match'),
});
const initialValues = {
  username: "",
  email: "",
  password: "",
  re_password: "",
};

export default Signupdash;