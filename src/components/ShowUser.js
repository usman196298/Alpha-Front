import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CardContent, Grid, Typography, Card, Container, Button } from '@mui/material';

function get_user_data(user_URL) {
   return axios.get(user_URL).then((response) => response.data)
}

function ShowUser() {
    const params=useParams();
    const user_URL = ("http://[::1]:4000/users/"+params.id);

    <h1>Show User: </h1>

    const [user, setUser] = useState([]);
    useEffect(() => {
        let mounted = true;
        get_user_data(user_URL).then((item) => {
            if (mounted) {
                setUser(item);
            }
        });
        return () => { (mounted = false) };
    }, []);
        return (
                <div>      
                  <Container>            
                    <br></br>
                    <div key={user.id}>
                      <Grid container justifyContent="center" alignItems="center">  
                        <Grid xs={8}>
                          <Card variant = "outlined">
                            
                            <CardContent>
                              <Typography variant="h5" component="div">
                                <strong>{user.username}</strong>
                              </Typography>
                              <Typography variant="p" component="div">
                                {user.email}
                              </Typography>
                              <br></br>

                              <Button href={'/users/' + user.id + '/edit'} variant="outlined" color="info">Edit</Button>
                              <Button href={'/users/' + user.id + '/delete'} variant="outlined" color="error">Delete</Button>
                            </CardContent>

                          </Card>
                        </Grid>
                      </Grid>
                    </div>
                  </Container>
              </div>
  )
}
export default ShowUser

