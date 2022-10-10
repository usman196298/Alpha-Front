import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { CardContent, Grid, Typography, Card, Container, Button } from '@mui/material';

const Articles_URL = "http://[::1]:4000/articles";

function getArticleAPI() {
  return axios.get(Articles_URL).then((response) => response.data) 
}


function Articles() {
  
  // Checking for User and Admin
  const  [currUse, setcurrUse] = useState(false);
  axios.get("http://localhost:4000/check",
    { withCredentials: true }
  ).then(response => {
    console.log("resp",response.data);
        setcurrUse(currUse => response.data.user.id);
  })
    .catch(err => {
      setcurrUse(currUse=> false);
      console.log("error:",currUse);
    })

  const  [admins, setAdmins] = useState(false);
  axios.get("http://localhost:4000/check",
  { withCredentials: true }
).then(response => {
    if(response.data.user.admin) {
    // setAdmins(admins => response.data.user.admin);
    setAdmins(admins => true);
    }
})
  .catch(err => {
    setAdmins(admins => false);
  })


  const  [articles, setArticles] = useState([]);
  useEffect(() => {
    let mounted = true;
    getArticleAPI().then((items) => {
      
      if (mounted) {
        setArticles(items);
      }
    });

    return () => { (mounted = false) };
  }, []);


  return (
          <div>
            <h1>Articles:</h1>  
            <Container>
              {articles.map((article) => {
                return (
                        <div key={article.id}>
                          <Grid container justifyContent="center" alignItems="center">
                            <Grid xs={8}>
                              <Card variant = "outlined" >
                                <CardContent>
                                  <Typography variant="h5" component="div">
                                    <strong>{article.title}</strong>
                                  </Typography>
                                  <Typography variant="p" component="div">
                                    {article.description}
                                  </Typography>
                                  <br></br>

                                  <Button href={'/articles/' + article.id + '/view'} variant="outlined" color="success">View</Button>

                                  { ( (article.user_id == currUse) || (admins) || ((article.user_id == currUse) && (admins)) ) &&
                                  <>
                                  <Button href={'/articles/' + article.id + '/edit'} variant="outlined" color="info">Edit</Button>
                                  <Button href={'/articles/' + article.id + '/delete'} variant="outlined" color="error">Delete</Button>
                                  </>
                                  }

                                  {/* { admins &&
                                    <>
                                  <Button href={'/articles/' + article.id + '/edit'} variant="outlined" color="info">Edit</Button>
                                  <Button href={'/articles/' + article.id + '/delete'} variant="outlined" color="error">Delete</Button>
                                    </>
                                  } */}

                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                          <br></br><br></br>
                        </div>
                )
            })}
            </Container>
          </div>
  )
}
export default Articles;