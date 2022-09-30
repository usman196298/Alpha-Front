import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/style.css'

import Navbar from "./components/Navbar";

import Signup from "./components/Signup";
import Login from "./components/Login";

import Articles from "./components/articles";
import Users from "./components/users";
import Categories from "./components/categories";
import NewArticle from './components/NewArticle';
import EditArticle from './components/EditArticle';
import ShowArticle from './components/ShowArticle';
import DeleteArticle from './components/DeleteArticle';

import NewCategory from './components/NewCategory';
import EditCategory from './components/EditCategory';
import ShowCategory from './components/ShowCategory';

import EditUser from './components/EditUser';
import ShowUser from './components/ShowUser';
import DeleteUser from './components/DeleteUser';



import Home from './components/home';
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>

        <BrowserRouter>
          <Switch>

            <Route path="/signup">
              <Signup/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>
        
            <Route path="/articles/:id/delete">
              <DeleteArticle/>
            </Route>

            <Route path="/articles/new">
              <NewArticle/>
            </Route>

            <Route path="/articles/:id/edit">
              <EditArticle/>
            </Route>

            <Route path="/articles/:id">
              <ShowArticle />
            </Route>


            <Route path="/articles">
              <Articles />
            </Route>


            <Route path="/users/:id/delete">
              <DeleteUser/>
            </Route>

            <Route path="/users/:id/edit">
              <EditUser />
            </Route>

            <Route path="/users/:id">
              <ShowUser  />
            </Route>

            <Route path="/users">
              <Users/>
            </Route>


            <Route path="/categories/new">
              <NewCategory/>
            </Route>

            <Route path="/categories/:id/edit">
              <EditCategory/>
            </Route>

            <Route path="/categories/:id">
              <ShowCategory />
            </Route>

            <Route path="/categories">
              <Categories />
            </Route>

            <Route path="/">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Home/>
            </Route>

          </Switch>
        </BrowserRouter>

      </div>

  );
}

export default App;


// NAVBAR IN BOOTSTRAP

       {/* <nav className="navbar navbar-expand-lg bg-light">
          <a className="navbar-brand" href='/'>ALPHA BLOG</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href='/users'>Bloggers</a>
                </li>
                <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/articles" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Articles
                  </a>
                  <ul className="dropdown-menu">  
                    <a className="dropdown-item" href="/articles/new"> Create new article </a>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
        </nav> */}