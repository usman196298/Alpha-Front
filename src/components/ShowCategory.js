import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CardContent, Grid, Typography, Card, Container, Button } from '@mui/material';


function get_category_data(category_URL) {
   return axios.get(category_URL).then((response) => response.data)
}

function ShowCategory() {
    const params=useParams();
    const category_URL = ("http://[::1]:4000/categories/"+params.id);

    <h1>Show Category: </h1>

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


    const [category, setCategory] = useState([]);
    useEffect(() => {
        let mounted = true;
        get_category_data(category_URL).then((item) => {
            if (mounted) {
                setCategory(item);
            }
        });
        return () => { (mounted = false) };
    }, []);
        return (
          <div>
            <Container>
              <br></br>
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

                        { admins &&
                        <>
                        <Button href={'/categories/' + category.id + '/edit'} variant="outlined" color="info">Edit</Button>
                        </>
                        }
                        
                      </CardContent>

                    </Card>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
  )
}
export default ShowCategory