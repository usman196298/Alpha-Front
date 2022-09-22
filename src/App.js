import './App.css';
import axios from "axios";
import Articles from "./components/articles";
import Users from "./components/users";
import Categories from "./components/categories";

import { useEffect, useState } from 'react';

const Articles_URL = "http://[::1]:4000/articles";

const Users_URL = "http://[::1]:4000/users";

const Categories_URL = "http://[::1]:4000/categories";

function getArticleAPI() {
  return axios.get(Articles_URL).then((response) => response.data)
}

function getUserAPI() {
  return axios.get(Users_URL).then((response) => response.data)
}

function getCategoryAPI() {
  return axios.get(Categories_URL).then((response) => response.data)
}


function App() {
  const  [articles, setArticles] = useState([]);

  const  [users, setUsers] = useState([]);

  const  [categories, setCategories] = useState([]);

  useEffect(() => {
    let mounted = true;
    getArticleAPI().then((items) => {
      if (mounted) {
        setArticles(items);
      }
    });

    return () => { (mounted = false) };
  }, []);

  useEffect(() => {
    let mounted = true;
    getUserAPI().then((items) => {
      if (mounted) {
        setUsers(items);
      }
    });

    return () => { (mounted = false) };
  }, []);

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
    <div className="App">
      <h1> ALPHA-BLOG REACT APP</h1>
      <Articles articles={articles} />

      <Users users={users} />

      <Categories categories={categories} />
    </div>
  );
}

export default App;
