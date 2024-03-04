import { Box, Button, TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { verifyIncident } from "../state/slices/incidentsSlice";
import Dashheader from "./Dashheader";

const Verify = () => {
  const {incidents,isError, isLoading,isSuccess,message} = useSelector((state)=> state.incidents)
  const {user} = useSelector((state)=> state.users)
  const {incidentid} = useParams();
  const incident = incidents.find((incident) => incident.id === incidentid);
  console.log(incident)
  const incidentData = {
        verifiedby:user.username,
        altitude:'',
        damage:false,
        impact:'',
        pilotwarning:false,
        flightphase:'',
        aircraftmodel:'',
        scientificname:'',
        wildlifenumber:'',
        wildlifenumberactual:'',
        airlineoperator:'',
        is_verified:false
   }
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || 'dashboard';

  const loginUser = async (values) => {
    dispatch(verifyIncident({incidentid,values}))
    .then(console.log(values))
    }
  const flightphase = [
    {
      value: 'landing roll',
      label: 'Landing Roll',
    },
    {
      value: 'take-off run',
      label: 'Take-off Run',
    },
    {
      value: 'approach',
      label: 'Approach',
    },
    {
      value: 'climbing',
      label: 'Climbing',
    },
  ];
  const impact = [
    {
      value: 'none',
      label: 'None',
    },
    {
      value: 'precautionary landing',
      label: 'Precautionary Landing',
    },
    {
      value: 'engine shutdown',
      label: 'Engine Shutdown',
    },
  ];

  const wildlifenumber = [
    {
      value: '1 to 5',
      label: '1 to 5'
    },
    {
      value: '6 to 50',
      label: '6 to 50'
    },
    {
      value: 'More than 50',
      label: 'More than 50'
    }
  ]
  return (
     
    <Box m="20px">
      <Dashheader title="Verify Incidents" subtitle="Wildlife Management Incident Verification" />
      <Formik
        onSubmit={loginUser}
        initialValues={incidentData}
        // validationSchema={submitSchema}
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
                name="incidentid"
                label="Incident ID"
                defaultValue={incident.id}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                name="recordedby"
                label="Recorded By"
                defaultValue={incident.properties.recordedby}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                name="airport"
                label="Airport"
                defaultValue={incident.properties.airport}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                name="verifiedby"
                label="Verfied By"
                defaultValue={user.username}
                InputProps={{
                  readOnly: true,
                }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Altitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.altitude}
                name="altitude"
                error={!!touched.altitude && !!errors.altitude}
                helperText={touched.altitude && errors.altitude}
                sx={{ gridColumn: "span 1" }}
              />
              <FormControl variant="outlined">
                <FormControlLabel
                  control={
                    <Switch                      
                      checked={values.damage}                      
                      inputProps={{ 'aria-label': 'controlled' }}
                      onChange={handleChange}
                    />
                    }    
                    name="damage"
                    label="Damage"            
                />
              </FormControl>
              <TextField
                select
                label="Impact"
                onChange={handleChange}
                value={values.impact}
                SelectProps={{
                  native: true,
                }}
                InputLabelProps={{
                  shrink: true
                }}
                name="impact"
                helperText="Impact on flight"
                sx={{ gridColumn: "span 1" }}
                >
                  {impact.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
              </TextField>
              <FormControl>
                <FormControlLabel
                  control={
                    <Switch                      
                      checked={values.pilotwarning}                      
                      inputProps={{ 'aria-label': 'controlled' }}
                      onChange={handleChange}
                    />
                    }
                    name="pilotwarning"
                    label="Pilot Warning"
              />
              </FormControl>
              <TextField
                select
                label="Flight Phase"
                onChange={handleChange}
                value={values.flightphase}
                SelectProps={{
                  native: true,
                }}
                name="flightphase"
                id="flightphase"
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ gridColumn: "span 1" }}
                >
                  {flightphase.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
                  {/* <MenuItem>
                  {flightphase.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                  </MenuItem> */}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Aircraft Model"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aircraftmodel}
                name="aircraftmodel"
                error={!!touched.aircraftmodel && !!errors.aircraftmodel}
                helperText={touched.aircraftmodel && errors.aircraftmodel}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Scientific Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.scientificname}
                name="scientificname"
                error={!!touched.scientificname && !!errors.scientificname}
                helperText={touched.scientificname && errors.scientificname}
                
              />
              
              <TextField
                select
                label="Invovled Wildlife"
                onChange={handleChange}
                value={values.wildlifenumber}
                SelectProps={{
                  native: true,
                }}
                InputLabelProps={{
                  shrink: true
                }}
                name="wildlifenumber"
                helperText="Number of involved wildlife"
                >
                  {wildlifenumber.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
              </TextField>            
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Wildlife Number Actual"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.wildlifenumberactual}
                name="wildlifenumberactual"
                error={!!touched.wildlifenumberactual && !!errors.wildlifenumberactual}
                helperText={touched.wildlifenumberactual && errors.wildlifenumberactual}
                
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Airline Operator"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.airlineoperator}
                name="airlineoperator"
                error={!!touched.airlineoperator && !!errors.airlineoperator}
                helperText={touched.airlineoperator && errors.airlineoperator}
                
              />

              <FormControl variant="outlined">
                <FormControlLabel
                  control={
                    <Switch                      
                      checked={values.is_verified}                      
                      inputProps={{ 'aria-label': 'controlled' }}
                      onChange={handleChange}
                    />
                    }    
                    name="is_verified"
                    label="Verify Incident"            
                />
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// const submitSchema = yup.object().shape({
//   email: yup.string().email("invalid email").required("required"),
//   password: yup.string().required("required").min(8, 'Must be at least 8 characters'),
// });

export default Verify;