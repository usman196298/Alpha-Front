import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CardContent, Grid, Typography, Card, Container, Button } from '@mui/material';


function get_article_data(article_URL) {
   return axios.get(article_URL).then((response) => response.data)
}

function ShowArticle() {
    const params=useParams();
    const user_URL = ("http://[::1]:4000/articles/"+params.id);

    <h1>Show Article: </h1>

    // Checking for Same User
    const  [currUse, setcurrUse] = useState(false);
    axios.get("http://localhost:4000/check",
      { withCredentials: true }
    ).then(response => {
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


    const [article, setArticle] = useState([]);
    useEffect(() => {
        let mounted = true;
        get_article_data(user_URL).then((item) => {
            if (mounted) {
                setArticle(item);
            }
        });
        return () => { (mounted = false) };
    }, []);
        return (
                <div>
                  <Container>
                    <br></br>
                    <div key={article.id}>
                      <Grid container justifyContent="center" alignItems="center">  
                        <Grid xs={8}>
                          <Card variant = "outlined">
                    
                            <CardContent>
                              <Typography variant="h5" component="div">
                                <strong>{article.title}</strong>
                              </Typography>
                              <Typography variant="p" component="div">
                                {article.description}
                              </Typography>
                              <br></br>

                              { ( (article.user_id == currUse) || (admins) || ((article.user_id == currUse) && (admins)) ) &&
                              <>
                              <Button href={'/articles/' + article.id + '/edit'} variant="outlined" color="info">Edit</Button>
                              <Button href={'/articles/' + article.id + '/delete'} variant="outlined" color="error">Delete</Button>
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

export default ShowArticle
