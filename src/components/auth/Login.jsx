import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import { Formik, Form } from 'formik';
import TextField  from "@mui/material/TextField";
import { object, string, number, date, InferType } from 'yup';



const Login = () => {

  const navigate = useNavigate();



  const loginScheme = object({
  email: string().email().required("Bu alan zorunludur"),
  password: string().required("Bu alan zorunludur")
});
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
       
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>
<Formik 
      initialValues={{email:"", password:""}}
      validationSchema={loginScheme}
      onSubmit={(values,actions)=>{
        actions.resetForm()
        actions.setSubmitting(false)

      }}
   

>{({values,handleChange,handleBlur,errors,touched})=>(
  <Form>
    <Box sx={{display:"flex",flexDirection:"column", gap:2}}>
      <TextField 
      label="Email"
       id="email"
       name="email"
       type="email"
       variant="outlined"
       value={values?.email || ""}
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.email && Boolean(errors.email)}
       helperText={touched.email && Boolean(errors.email)}
     
      />
      <TextField 
      label="password"
       id="password"
       name="password"
       type="password"
       variant="outlined"
       value={values?.email || ""}
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.password && Boolean(errors.password)}
       helperText={touched.password && Boolean(errors.password)}
     
      />
    </Box>
  </Form>

)

}

</Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
         
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
