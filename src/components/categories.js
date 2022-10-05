import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Grid, Container, Card, CardContent, Typography, Button } from '@mui/material';

const Categories_URL = "http://[::1]:4000/categories";

function getCategoryAPI() {
  return axios.get(Categories_URL).then((response) => response.data)
}

function Categories() {

  const  [admins, setAdmins] = useState(false);
  axios.get("http://localhost:4000/check",
    { withCredentials: true }
  ).then(response => {
      if(response.data.user.admin) {
      setAdmins(admins => response.data.user.admin);
      }
  })
    .catch(err => {
      setAdmins(admins => false);
    })


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

  return (
    <div>
      <h1>Categories:</h1>
      <Container>
        {categories.map((category) => {
          return (
                  <div key={category.id}>
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid xs={8}>
                        <Card variant = "outlined">
                          <CardContent>
                            <Typography variant="h5" component="div">
                              <strong>{category.id}</strong>
                            </Typography>
                            <Typography variant="p" component="div">
                              {category.name}
                            </Typography>
                            <br></br>

                            <Button href={'/categories/' + category.id + '/view'} variant="outlined" color="success">View</Button>

                            {/* {console.log("Admin",admins)} */}

                            { admins &&
                            <>
                            <Button href={'/categories/' + category.id + '/edit'} variant="outlined" color="info">Edit</Button>
                            </>
                            }

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


export default Categories;