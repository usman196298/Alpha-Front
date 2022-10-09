import React, { useState } from 'react';
import { AppBar, InputLabel, MenuItem, Toolbar, IconButton, Typography} from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';
import { AdminPanelSettingsOutlined } from '@mui/icons-material';

function Navbar() {

  // Checking for User and Admin
  const  [users, setUsers] = useState(false);
  axios.get("http://localhost:4000/check",
    { withCredentials: true }
  ).then(response => {
      setUsers(user=> true);
  })
    .catch(err => {
      setUsers(user=> false);
   
    })


  const  [admins, setAdmins] = useState(false);
  axios.get("http://localhost:4000/check",
    { withCredentials: true }
  ).then(response => {
      if(response.data.user.admin) {
      setAdmins(admin => true);
      }
  })
    .catch(err => {
      setUsers(admin=> false);
   
    })


  return (
    <div>
      <AppBar position="static" id="navbar">
        <Toolbar>
          
            {/* Alpha Blog */}
          <IconButton      
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

          <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 0,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              ALPHA BLOG
            </Typography>   
          </IconButton>
          

            {/* Bloggers */}
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 8 }}
            >
            <Typography 
              variant="h6"
              component="a"
              href='/users' 
              sx={{ 
                flexGrow: 1,
                color: 'white',
                textDecoration: 'none',
                
                }}>
              Bloggers
            </Typography>
          </IconButton>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: -5 }}
            >
            </IconButton>

            <InputLabel id="demo-select-small">Articles</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
            >
            <MenuItem>
              <Typography 
                variant="h6"
                component="a"
                href='/articles' 
                sx={{ 
                  flexGrow: 1,
                  color: 'black',
                  textDecoration: 'none',
                  }}>
                View Articles
              </Typography>
            </MenuItem>

            { users &&
            <>
            <MenuItem>
              <Typography 
                variant="h6"
                component="a"
                href='/articles/new' 
                sx={{ 
                  flexGrow: 1,
                  color: 'black',
                  textDecoration: 'none',
                  }}>
                Create Article
              </Typography>
            </MenuItem>
            </>
             }


            </Select>
            <InputLabel id="demo-select-small">Categories</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
            >

            <MenuItem>
              <Typography 
                variant="h6"
                component="a"
                href='/Categories' 
                sx={{ 
                  flexGrow: 1,
                  color: 'black',
                  textDecoration: 'none',
                  
                  }}>
                View Categories
              </Typography>
            </MenuItem>
          
            { admins &&
            <>
            <MenuItem>
            <Typography 
                variant="h6"
                component="a"
                href='/Categories/new' 
                sx={{ 
                  flexGrow: 1,
                  color: 'black',
                  textDecoration: 'none',
                  
                  }}>
                Create Category
              </Typography>
            </MenuItem>
            </>
            }
            </Select>


          { !users &&
          <>
            <IconButton
            
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 3}}
            >
          
            <Typography 
              variant="h6"
              component="a"
              href='/login' 
              sx={{ 
                flexGrow: 1,
                color: 'white',
                textDecoration: 'none',
                
                }}>
              Login
            </Typography>
            </IconButton>
          </>
          }
          

          { users &&
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 3}}
            >

            <Typography 
              variant="h6"
              component="a"
              href='/logout' 
              sx={{ 
                flexGrow: 1,
                color: 'white',
                textDecoration: 'none',
                
                }}>
                  { admins &&
                  <>
                    Logout (Admin)
                  </>
                  }
                  { !admins &&
                  <>
                    Logout
                  </>
                  }
            </Typography>
            </IconButton>
          </>
          }


            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 3}}
            >

            <Typography 
              variant="h6"
              component="a"
              href='/check' 
              sx={{ 
                flexGrow: 1,
                color: 'white',
                textDecoration: 'none',
                
                }}>
              Check
            </Typography>
            </IconButton> */}
            
          { !users &&
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0}}
            >
            <Typography 
              variant="h6"
              component="a"
              href='/signup' 
              sx={{ 
                flexGrow: 1,
                color: 'white',
                textDecoration: 'none',
                
                }}>
              Sign up
            </Typography>
            </IconButton>
          </>
          }
          

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
