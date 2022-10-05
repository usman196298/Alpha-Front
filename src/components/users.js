import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { CardContent, Grid, Typography, Card, Container, Button } from '@mui/material';

const Users_URL = "http://[::1]:4000/users";


function getUserAPI() {
  return axios.get(Users_URL).then((response) => response.data)
}


function Users() {

    // Checking for User and Admin
    const  [currUse, setcurrUse] = useState(false);
    axios.get("http://localhost:4000/check",
      { withCredentials: true }
    ).then(response => {
          setcurrUse(currUse => response.data.user.id);
    })
      .catch(err => {
        setcurrUse(currUse=> false);
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


  const  [users, setUsers] = useState([]);
  useEffect(() => {
    let mounted = true;
    getUserAPI().then((items) => {
      if (mounted) {
        setUsers(items);
      }
    });

    return () => { (mounted = false) };
  }, []);

  return (
          <div>
            <h1>Users:</h1>
            <Container>
              {users.map((user) => {
                return (
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

                                  <Button href={'/users/' + user.id + '/view'} variant="outlined" color="success">View</Button> 
                                  
                                   
                                  {( (user.id == currUse) || (admins) || ((user.id == currUse) && (admins)) ) &&
                                  <>
                                  <Button href={'/users/' + user.id + '/edit'} variant="outlined" color="info">Edit</Button>
                                  <Button href={'/users/' + user.id + '/delete'} variant="outlined" color="error">Delete</Button>
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


export default Users;