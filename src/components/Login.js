import React, { createContext } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, responsiveFontSizes } from '@mui/material';
import Alert from 'react-bootstrap/Alert';

function Login() {

  const [currentUser, setCurrentUser] = React.useState();
  let history = useHistory();
  const [hasError, setError] = React.useState(false);
  const [formValue, setformValue] = React.useState({
    email: '',
    password: '',
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append("email", formValue.email)
    loginFormData.append("password", formValue.password)

    axios.post("http://localhost:4000/login", {
      email: formValue.email,
      password: formValue.password,
  },
    { withCredentials: true }
  ).then(response => {
    console.log(response)
    if (response.status === 201 || response.statusText === 'Created') {
        history.push("/articles");
        }
  })
    .catch(err => {
        setError(error=> true);
    })
}
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  
  return (
    <div>
      {hasError &&
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
        <p>Login Failed! Your Credentials  are  incorrect.</p>
        </Alert>
      }
      <h1>Login</h1>

    <Grid xs={12} container justifyContent="center" alignItems="center">
      <Grid xs={8} container id="login" className="colordiv mt-2" >
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
          <form>
            
            <h1 id="form-heads" className="col-1  col-form-label text-light">Email:</h1>
            <TextField id="filled-basic"  fullWidth
              type="email"
              name="email"
              placeholder="enter your email"
              value={formValue.email}
              onChange={handleChange}
              sx={{
                backgroundColor: "white"
              }}
            />
            <br></br>
            <br></br>

            <h1 id="form-heads" className="col-1 col-form-label text-light">Password:</h1>
            <TextField id="filled-basic" fullWidth
              type="password"
              name="password"
              placeholder="enter password"
              value={formValue.password}
              onChange={handleChange}
              sx={{
                backgroundColor: "white"
              }}
            />
            <br></br>
            <br></br>

            <button class="btn btn-outline-light btn-lg mt-4" onClick={handleSubmit}>Login</button>
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

export default Login;



























// import React from 'react';
// import axios from 'axios';
// import { TextField, Grid, Button } from '@mui/material';

// function Login() {
  
//   const [formValue, setformValue] = React.useState({
//     email: '',
//     password: ''
//   });

//     // const loginFormData = new FormData();

//     const handleSubmit = (event) => {

//     event.preventDefault();

//     axios.post("http://[::1]:4000/login", {
//       email: formValue.email,
//       password: formValue.password,
//     },
//       { withCredentials: true }
//     ).then(response => {
//       console.log("registation response", response.data.user)
//       if (response.status === "201" || response.statusText === 'Created') { }
//     })

//   }
  

//   const handleChange = (event) => {
//     setformValue({
//       ...formValue,
//       [event.target.name]: event.target.value
//     });
//   }

//   return (
//     <div>
//       <h2>Log in</h2>
//       <Grid xs={12} container justifyContent="center" alignItems="center">
//         <Grid xs={4} className="colordiv mt-2" justifyContent="center" alignItems="center">

//           <form>
//             <br></br>

//             <h5 id="form-heads">Email</h5>
//             <TextField id="filled-basic"
//               type="text"
//               name="email"
//               placeholder="Enter your valid email"
//               value={formValue.email}
//               onChange={handleChange}
//             />

//             <br></br>
//             <br></br>

//             <h5 id="form-heads">Password</h5>
//             <TextField id="filled-basic"
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formValue.password}
//               onChange={handleChange}
//             />

//             <br></br>
//             <br></br>

//             <Button id="submit-button" type="submit" variant="outlined" color="info" onClick={handleSubmit}>Log in</Button>

//             <br></br>
//             <br></br>
//             <br></br>
//           </form>

//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default Login


// //for checking
//   //   axios.post("http://[::1]:4000/login", {
//   //     email: "usman22@gmail.com",
//   //     password: "usman12",
//   //   },
//   //     { withCredentials: true }
//   //   ).then(response => {
//   //     console.log("registation response", response.data.user)
//   //     if (response.status === "201" || response.statusText === 'Created') { }
//   //   })
//   // }



  
// //   <form onSubmit={handleSubmit}>
// //   <br></br>

// //   <h5 id="form-heads">Email</h5>
// //   <TextField id="filled-basic"
// //     type="text"
// //     name="email"
// //     placeholder="Enter your valid email"
// //     value={formValue.email}
// //     onChange={handleChange}
// //   />

// //   <br></br>
// //   <br></br>

// //   <h5 id="form-heads">Password</h5>
// //   <TextField id="filled-basic"
// //     type="password"
// //     name="password"
// //     placeholder="Enter your password"
// //     value={formValue.password}
// //     onChange={handleChange}
// //   />

// //   <br></br>
// //   <br></br>

// //   <Button id="submit-button" type="submit" variant="outlined" color="info">Log in</Button>

// //   <br></br>
// //   <br></br>
// //   <br></br>
// // </form>