import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField, Grid, Button } from '@mui/material';
import Alert from 'react-bootstrap/Alert';

function NewCategory() {

  let history = useHistory();
  const [hasError, setError] = React.useState(false);

    const [formValue, setformValue] = React.useState({
      name: ''
    });
    const handleSubmit = (event) => {
      event.preventDefault();
      const loginFormData = new FormData();
      loginFormData.append("name", formValue.name)
      axios.post('http://[::1]:4000/categories/', {
        name: formValue.name,
    },
      { withCredentials: true }
    ).then(response => {
        console.log(response)
            history.push("/categories");
      }).catch(error => {
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
              <p>Creation Failed! Your Credentials  are  incorrect.</p>
             </Alert>
            }

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
