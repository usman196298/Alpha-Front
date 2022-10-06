import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css';
import './components/style.css'

import Navbar from "./components/Navbar";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import Check from "./components/Check";


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

  const  [users, setUsers] = useState(false);
  const  [work, setWork] = useState(false);

  useEffect(() => {
axios.get("http://localhost:4000/check",
  { withCredentials: true }
).then(response => {
    setUsers(user=> true);
    setWork(work=>true);
    console.log("Users: ",users)
})
  .catch(err => {
    setWork(work=>true)
    console.log("error: ",work);
  })
},[users]);

  return (
    <div className="App">
      { work &&
      <>
        <Navbar></Navbar>

      { users && 
      <>
        <BrowserRouter forceRefresh={true}>
          <Switch>
            <Route exact path="/logout">
              <Logout/>
            </Route>
        
            <Route exact path="/articles/:id/delete">
              <DeleteArticle/>
            </Route>

            <Route exact path="/articles/new">
              <NewArticle/>
            </Route>

            <Route exact path="/articles/:id/edit">
              <EditArticle/>
            </Route>
         
            <Route exact path="/articles/:id/view">
              <ShowArticle /> 
            </Route>
         
            <Route exact path="/articles">
              <Articles />
            </Route>

             <Route exact path="/users/:id/delete">
              <DeleteUser/>
            </Route>

            <Route exact path="/users/:id/edit">
              <EditUser />
            </Route>

            <Route exact path="/users/:id/view">
              <ShowUser  />
            </Route>

            <Route exact path="/users">
              <Users/>
            </Route>

            <Route exact path="/categories/new">
              <NewCategory/>
            </Route>
         
            <Route exact path="/categories/:id/edit">
              <EditCategory/>
            </Route>
         
            <Route exact path="/categories/:id/view">
              <ShowCategory />
            </Route>
          

            <Route exact path="/categories">
              <Categories />
            </Route>
          

            <Route exact path="/">
              <Home/>
            </Route>  

            <Route path='*'>
              <Redirect to="/"></Redirect>
            </Route>
            
          </Switch>
        </BrowserRouter>
        </>
      } 


      { !users && 
        <>
        <BrowserRouter forceRefresh={true}>
          <Switch>
            <Route exact path="/signup">
              <Signup/>
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>

            <Route exact path="/articles/:id/view">
              <ShowArticle /> 
            </Route>

            <Route exact path="/articles">
              <Articles />
            </Route>

            <Route exact path="/users/:id/view">
              <ShowUser  />
            </Route>

            <Route exact path="/users">
              <Users/>
            </Route>

            <Route exact path="/categories/:id/view">
              <ShowCategory />
            </Route>

            <Route exact path="/categories">
              <Categories />
            </Route>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path='*'>
              <Redirect to="/"></Redirect>
            </Route>
            
          </Switch>
        </BrowserRouter>
        </>
      }
      <Footer></Footer>
    </>
    } 

    </div>
  );


}

export default App;