import { useState, useEffect, useRef } from "react";
import { activeUser, loginActiveUser } from '../../../state/slices/userSlice';
import CssBaseline from "@mui/material/CssBaseline";

//redux imports
import {useDispatch, useSelector} from 'react-redux';

// react-router-dom components
import { Link, useNavigate} from "react-router-dom";

// Vision UI Dashboard React components
import VuiBox from "../../../components/VuiBox";
import VuiTypography from "../../../components/VuiTypography";
import VuiInput from "../../../components/VuiInput";
import VuiButton from "../../../components/VuiButton";
import VuiSwitch from "../../../components/VuiSwitch";
import GradientBorder from "../../../examples/GradientBorder";

// Vision UI Dashboard assets
import radialGradient from "../../../assets/theme/functions/radialGradient";
import palette from "../../../assets/theme/base/colors";
import borders from "../../../assets/theme/base/borders";

// Authentication layout components
import CoverLayout from "../../../layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "../../../assets/images/signInImage.png";

function SignIn() {
  const {user,isError, isLoading,isSuccess,message} = useSelector((state)=> state.user)
	const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useRef();
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [ userData , setUserData ] = useState({
    email:'',
    password:''
  })

const handleChange = (e)=>{
    setUserData({...userData, [e.target.name]:e.target.value});
}

const loginUser = async (e) => {
  e.preventDefault();
    dispatch(loginActiveUser(userData)).then(
      dispatch(activeUser)
    );
    navigate('/');
};

  return (
    <CoverLayout
      title="Sign in to  the access system"
      color="white"
      description="Enter your email and password to sign in"
      premotto="WILDLIFE MANAGEMENT SYSTEM"
      motto="AIRPORT AUTHORITY"
      image={bgSignIn}
    >
      <VuiBox component="form" role="form" onSubmit={loginUser} ref={form}>
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Email
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput name='email' type="email" placeholder="Your email..." fontWeight="500" onChange={handleChange} value={userData.email} required />
          </GradientBorder>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Password
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            borderRadius={borders.borderRadius.lg}
            padding="1px"
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              name='password'
              type="password"
              placeholder="Your password..."
              sx={({ typography: { size } }) => ({
                fontSize: size.sm,
              })}
              onChange={handleChange} value={userData.password} required
            />
          </GradientBorder>
        </VuiBox>
        <VuiBox display="flex" alignItems="center">
          <VuiSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
          <VuiTypography
            variant="caption"
            color="white"
            fontWeight="medium"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Remember me
          </VuiTypography>
        </VuiBox>
        <VuiBox mt={4} mb={1}>
          <VuiButton type='submit' color="info" fullWidth>
            SIGN IN
          </VuiButton>
        </VuiBox>
        <VuiBox mt={3} textAlign="center">
          <VuiTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <VuiTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="white"
              fontWeight="medium"
            >
              Sign up
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </CoverLayout>
  );
}

export default SignIn;
