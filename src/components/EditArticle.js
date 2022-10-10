import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TextField, Grid, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AppBar, InputLabel, MenuItem, Toolbar, IconButton, Typography, FormControl} from '@mui/material';
import Alert from 'react-bootstrap/Alert';

function getArticleAPI(x) {
  const Articles_URL = ('http://[::1]:4000/articles/'+x );
  return axios.get(Articles_URL).then((response) => response.data)
} 

function getCategoryAPI() {
  const Categories_URL = "http://[::1]:4000/categories";
  return axios.get(Categories_URL).then((response) => response.data)
}


function getCategory_article_API(x) {
  const Categories_URL = "http://[::1]:4000/articles/"+x+"/edit";
  return axios.get(Categories_URL).then((response) => response.data)
}

function EditArticle() {
    const params  = useParams();
    const id = params.id
  
    let history = useHistory();
    const [hasError, setError] = React.useState(false);
        
    const  [articles, setArticles] = useState([]);
    useEffect(() => {
      let mounted = true;
      getArticleAPI(id).then((items) => {
        if (mounted) {
          setArticles(items.article);
        }
      });
  
      return () => { (mounted = false) };
    }, []);


    const  [article_category, setArtcategory] = useState([]);
    useEffect(() => {
      let mounted = true;
      getCategory_article_API(id).then((items) => {
        if (mounted) {
              //  if (items[0].length >=1 ){
           setArtcategory(items[0].name);
              //  }
        }
      });
  
      return () => { (mounted = false) };
    }, []);
  

    // console.log("Category Value: ",article_category);


      useEffect(() => {
        setformValue(articles);

      },[articles]);

    const [formValue, setformValue] = React.useState({
        title: articles.title,
        description: articles.description
         });

  
    const  [myCategory, setmyCategory] = useState([]);


    useEffect(() => {
      setmyCategory(article_category);

    },[article_category]);

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put('http://[::1]:4000/articles/' + params.id, {
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




    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // store the states in the form data
    //   const loginFormData = new FormData();
    //   loginFormData.append("title", formValue.title)
    //   loginFormData.append("description", formValue.description)
    //   loginFormData.append("category", formValue.category)

    //   try {
    //     // make axios post request
    //     const response =  axios({
    //       method: "put",
    //       url: ('http://[::1]:4000/articles/' + params.id),
    //       data: loginFormData,
    //       headers: { "Content-Type": "multipart/form-data" },
    //     }).then(response => {
    //       console.log(response)
    //       history.push("/articles");
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
              <p>Editing  Failed! Your Credentials  are  incorrect.</p>
             </Alert>
            }

            <h2>Edit Article: </h2>

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

                  <h5 id="form-heads">Previous Category</h5>
                  <TextField id="filled-basic"
                    type="text"
                    name="mycategory"
                    value={article_category}
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
                      defaultValue={[article_category]}
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

export default EditArticle
