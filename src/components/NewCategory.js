import React from 'react'
import axios from 'axios';
import { TextField, Grid, Button } from '@mui/material';

function NewCategory() {

    const [formValue, setformValue] = React.useState({
      name: ''
    });
  
    const handleSubmit = (event) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("name", formValue.name)

      try {
        // make axios post request
        const response =  axios({
          method: "post",
          url: "http://[::1]:4000/categories/",
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
            <h2>Create New Category: </h2>
            <Grid  xs={12} container  justifyContent="center" alignItems="center">
              <Grid xs={4} className="colordiv mt-2" justifyContent="center" alignItems="center">
                <form onSubmit={handleSubmit}>
                    
                  <br></br>
                  <h5 id="form-heads">Category's Name</h5>
                  <TextField id="filled-basic" 
                    type= "text"
                    name="name"
                    placeholder="Enter your category's name"
                    value={formValue.name}
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

export default NewCategory
