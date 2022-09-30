import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TextField, Grid, Button } from '@mui/material';

function EditUser() {
    const params  = useParams();
    const id = params.id
  
    // const AllUsers  = props.users;

    // let found = [];
    // const currentarticle = AllUsers.map(myuser => {
    //   if (myuser.id == id )
    //   {
    //     found = myuser;
    //   }
    // })

    const [formValue, setformValue] = React.useState({
        name: '',
        email: ''
    });


    const handleSubmit = (event) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("username", formValue.name)
      loginFormData.append("email", formValue.email)

      try {
        // make axios post request
        const response =  axios({
          method: "put",
          url: ('http://[::1]:4000/users/' + params.id),
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
          <h2>Edit User: </h2>

          <Grid  xs={12} container  justifyContent="center" alignItems="center">
            <Grid xs={4} className="colordiv mt-2" justifyContent="center" alignItems="center">
              <form onSubmit={handleSubmit}>
                  
                <br></br>
                <h5 id="form-heads">Username</h5>
                <TextField id="filled-basic" 
                  type= "text"
                  name="name"
                  placeholder="Enter username"
                  value={formValue.name}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>

                <h5 id="form-heads">Email</h5>
                <TextField id="filled-basic"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={formValue.email}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>

                <Button id="submit-button" type="submit" variant="outlined" color="info">Submit</Button>
                
                <br></br>
                <br></br>
                <br></br>

              </form>
            </Grid>
          </Grid>

    </div>
  )
}

export default EditUser