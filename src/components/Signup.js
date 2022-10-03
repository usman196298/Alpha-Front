import React from 'react'
import axios from 'axios';
import { TextField, Grid, Button, Alert} from '@mui/material';
import Box from '@mui/material/Box';


function Signup() {

  const [formValue, setformValue] = React.useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.username)
    loginFormData.append("email", formValue.email)
    loginFormData.append("password", formValue.password)

    try {
      // make axios post request
      const response =  axios({
        method: "post",
        url: "http://[::1]:4000/users",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  return (
    <div>
            <h2>Sign up for Alpha Blog</h2>
            <Grid  xs={12} container  justifyContent="center" alignItems="center">
              <Grid xs={8} className="colordiv mt-2" justifyContent="center" alignItems="center">
                <Box
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 4,
                    height: '5%',
                    width: 700,
                    maxWidth: '100%',
                  }}
                >
                <form onSubmit={handleSubmit}>
                  <br></br>
                  <h5 id="form-heads">Username</h5>
                  <TextField id="filled-basic" fullWidth
                    type= "text"
                    name="username"
                    placeholder="Enter username"
                    value={formValue.username}
                    onChange={handleChange}
                  />
                  <br></br>
                  <br></br>

                  <h5 id="form-heads">Email</h5>
                  <TextField id="filled-basic" fullWidth
                    type="text"
                    name="email"
                    placeholder="Enter a valid email"
                    value={formValue.email}
                    onChange={handleChange}
                  />
                  <br></br>
                  <br></br>

                  <h5 id="form-heads">Password</h5>
                  <TextField id="filled-basic" fullWidth
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formValue.password}
                    onChange={handleChange}
                  />
                  <br></br>
                  <br></br>

                  <Button id="submit-button" type="submit" variant="outlined" color="info">Sign Up</Button>
                  
                  <br></br>
                  <br></br>
                  <br></br>

                </form>
                </Box>
              </Grid>
            </Grid>
          </div>
  )
}

export default Signup