import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from "axios";
import Articles from "./components/articles";
import Users from "./components/users";
import Categories from "./components/categories";

import { useEffect, useState } from 'react';

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


function App() {
  return (
      <div className="App">
        <h1> ALPHA-BLOG REACT APP</h1>

        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Alpha Blog</a>

            <li className="nav-item">
              <a href="/articles"> Articles </a>
            </li>

            <li className="nav-item">
              <a href="/users"> Users </a>
            </li>

            <li className="nav-item">
              <a href="/categories"> Categories </a>
            </li>
          </div>
        </nav>

        <BrowserRouter>
          <Switch>

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

          </Switch>
        </BrowserRouter>

      </div>
  );
}

export default App;
