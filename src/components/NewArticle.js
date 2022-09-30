import React from 'react'
import axios from 'axios';
import { TextField, Grid, Button } from '@mui/material';

function NewArticle() {

    const [formValue, setformValue] = React.useState({
      title: '',
      description: ''
    });
  
    const handleSubmit = (event) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("title", formValue.title)
      loginFormData.append("description", formValue.description)

      try {
        // make axios post request
        const response =  axios({
          method: "post",
          url: "http://[::1]:4000/articles/",
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
            <h2>Create New Article:</h2>
            <Grid  xs={12} container  justifyContent="center" alignItems="center">
              <Grid xs={4} className="colordiv mt-2" justifyContent="center" alignItems="center">
                <form onSubmit={handleSubmit}>
                    
                  <br></br>
                  <h5 id="form-heads">Title</h5>
                  <TextField id="filled-basic" 
                    type= "text"
                    name="title"
                    placeholder="Enter title of your article"
                    value={formValue.title}
                    onChange={handleChange}
                  />
                  <br></br>
                  <br></br>

                  <h5 id="form-heads">description</h5>
                  <TextField id="filled-basic"
                    type="description"
                    name="description"
                    placeholder="Enter description"
                    value={formValue.description}
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

export default NewArticle
