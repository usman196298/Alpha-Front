import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {TextField, Grid, Button} from '@mui/material';
import Alert from 'react-bootstrap/Alert';


function getCategoryAPI(x) {
  const Category_URL = ('http://[::1]:4000/categories/'+x );
  return axios.get(Category_URL).then((response) => response.data)
} 


function EditCategory() {

    const params  = useParams();
    const id = params.id;
    
    let history = useHistory();
    const [hasError, setError] = React.useState(false);

    const  [categories, setCategories] = useState([]);
    useEffect(() => {
      let mounted = true;
      getCategoryAPI(id).then((items) => {
        if (mounted) {
          setCategories(items);
        }
      });
  
      return () => { (mounted = false) };
    }, []);


      useEffect(() => {
        setformValue(categories);
      },[categories]);



    const [formValue, setformValue] = React.useState({
      name: categories.name
    });

    const handleSubmit = (event) => {
      event.preventDefault();
      const loginFormData = new FormData();
      loginFormData.append("name", formValue.name)
      axios.put('http://[::1]:4000/categories/'+params.id, {
        name: formValue.name,
    },
      { withCredentials: true }
    ).then(response => {
        history.push("/categories");
      }).catch(error => {
        setError(error=> true);
      })
  }

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // store the states in the form data\
    //   const loginFormData = new FormData();
    //   loginFormData.append("name", formValue.name)

    //   try {
    //     // make axios post request
    //     const response =  axios({
    //       method: "put",
    //       url: ('http://[::1]:4000/categories/' + params.id),
    //       data: loginFormData,
    //       headers: { "Content-Type": "form-data" },
    //     }).then(response => {
    //       history.push("/categories");
    //     });
    //   } catch(error) {
    //     setError(error=> true);
    //   }
    // }
  
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
              <p>Editing  Failed! Your Credentials  are  incorrect.</p>
             </Alert>
            }

            <h2>Edit Category: </h2>

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

export default EditCategory