import React from 'react';
import { AppBar, InputLabel, MenuItem, Toolbar, IconButton, Typography} from '@mui/material';
import Select from '@mui/material/Select';

function Navbar() {
  return (
  <div>
      <AppBar position="static" id="navbar">
        <Toolbar>
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

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -5 }}
          >
          </IconButton>
          
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
              Categories
            </Typography>
          </MenuItem>

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
          </Select>

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

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
