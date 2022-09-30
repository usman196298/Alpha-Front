import React from 'react';
import axios from 'axios';
import { TextField, Grid, Button } from '@mui/material';

function Login() {

  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("email", formValue.email)
    loginFormData.append("password", formValue.password)

      try {
        // make axios post request
        const response =  axios({
          method: "post",
          url: "http://[::1]:4000/login",
          data: loginFormData,
          withCredentials:true,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch(error) {
        console.log(error)
      }
    }

  //   axios.post("http://[::1]:4000/login", {
  //     email: "usman22@gmail.com",
  //     password: "usman12",
  //   },
  //     { withCredentials: true }
  //   ).then(response => {
  //     console.log("registation response", response.data.user)
  //     if (response.status === "201" || response.statusText === 'Created') { }
  //   })
  // }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }


  return (
    <div>
      <h2>Log in</h2>
      <Grid xs={12} container justifyContent="center" alignItems="center">
        <Grid xs={4} className="colordiv mt-2" justifyContent="center" alignItems="center">
          <form onSubmit={handleSubmit}>
            <br></br>
            <h5 id="form-heads">Email</h5>
            <TextField id="filled-basic"
              type="text"
              name="email"
              placeholder="Enter your valid email"
              value={formValue.email}
              onChange={handleChange}
            />
            <br></br>
            <br></br>

            <h5 id="form-heads">Password</h5>
            <TextField id="filled-basic"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formValue.password}
              onChange={handleChange}
            />
            <br></br>
            <br></br>

            <Button id="submit-button" type="submit" variant="outlined" color="info">Log in</Button>

            <br></br>
            <br></br>
            <br></br>

          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
