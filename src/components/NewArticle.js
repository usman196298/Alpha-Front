import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, InputLabel, MenuItem, Toolbar, IconButton, Typography, FormControl} from '@mui/material';
import { TextField, Grid, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Alert from 'react-bootstrap/Alert';


function getCategoryAPI() {
  const Categories_URL = "http://[::1]:4000/categories";
  return axios.get(Categories_URL).then((response) => response.data)
}


function NewArticle() {

   let history = useHistory();
   const [hasError, setError] = React.useState(false);

    const [formValue, setformValue] = React.useState({
      title: '',
      description: '',
      category_ids:''
    });

    const  [categories, setCategories] = useState([]);
    useEffect(() => {
      let mounted = true;
      getCategoryAPI().then((items) => {
        if (mounted) {
          setCategories(items);
        }
      });
  
      return () => { (mounted = false) };
    }, []);

    const  [myCategory, setmyCategory] = useState([]);

  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post("http://localhost:4000/articles", {
        title: formValue.title,
        description: formValue.description,
        category_ids: myCategory
    },
      { withCredentials: true }
    ).then(response => {
          history.push("/articles");
    }).catch(error => {
      setError(error=> true);
    })
}


    // const handleSubmit = (event) => {
    //   // store the states in the form data
    //   const loginFormData = new FormData();
    //   loginFormData.append("title", formValue.title)
    //   loginFormData.append("description", formValue.description)
    //   loginFormData.append("category", formValue.category)

    //   try {
    //     // make axios post request
    //     const response =  axios({
    //       method: "post",
    //       url: "http://[::1]:4000/articles/",
    //       data: loginFormData,
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });
    //   } catch(error) {
    //     console.log(error)
    //   }
    // }

    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }

    const handleChanger = (event) => {
      setmyCategory(event.target.value);
    };

  return (
          <div>
            {hasError &&
             <Alert variant="danger" onClose={() => setError(false)} dismissible>
              <p>Creation Failed! Your Credentials  are  incorrect.</p>
             </Alert>
            }

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

                  <h5 id="form-heads">Category</h5>
                  <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="filled-basic"
                      value= {[myCategory]}
                      label="myCategory"
                      onChange={handleChanger}
                    >
                    
                    {categories.map((category) => (
                          <MenuItem  key={category.id} value={category.id}>
                                {category.name}
                          </MenuItem>
                    )
                      )}
                    </Select>
                  </FormControl>

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



// <InputLabel id="demo-select-small">Categories</InputLabel>
// {categories.map((category) => {
//   return (
//     <div key={category.id}>
//       <Select labelId="demo-select-small" id="demo-select-small">
//       {/* <MenuItem> */}
//         <Typography variant="p" component="div">
//             {category.name}
//         </Typography>
//       {/* </MenuItem> */}
    
//       </Select>
//     </div>
//     )} 
//   )}

// <br></br>
// <br></br>

