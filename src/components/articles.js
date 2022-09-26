import React from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import NewArticle from './NewArticle';
// import EditArticle from './EditArticle';
// import ShowArticle from './ShowArticle';
// import DeleteArticle from './DeleteArticle';

const Articles_URL = "http://[::1]:4000/articles";

function getArticleAPI() {
  return axios.get(Articles_URL).then((response) => response.data)
}


function Articles() {

  const  [articles, setArticles] = useState([]);

  


  useEffect(() => {
    let mounted = true;
    getArticleAPI().then((items) => {
      if (mounted) {
        setArticles(items);
      }
    });

    return () => { (mounted = false) };
  }, []);


  return (
          <div>
            <h1>Articles:</h1>  
            <div className="container">
              {articles.map((article) => {
                return (
                        <div key={article.id}>
                          <div className="row justify-content-md-center">
                            <div className="col-8 mt-4">
                              <div className="card text-center shadow mb-5 bg-white rounded">
                                <div className="card-body">
                                  <h3 className="card-title"> {article.title} </h3>
                                  <p className="card-text">{article.description}</p>
                                  <Link to = {'/articles/' + article.id + '/view'} className='btn btn-outline-success'>View</Link>
                           
                                  <Link to = {'/articles/' + article.id + '/edit'} className='btn btn-outline-info'>Edit</Link>

                                  <Link to = {'/articles/' + article.id + '/delete'} className='btn btn-outline-danger'>Delete</Link>

                                </div>

                                <div className="card-footer text-muted">
                                  {/* <small>Created  TimeAgo{article.created_at} ago,
                                        Edited TimeAgo{article.updated_at} ago </small> */}
                                </div>  

                              </div>
                            </div>
                          </div>
                        </div>
                )
            })}
            </div>

          {/* <BrowserRouter>
            <Switch>
                <Route path="/articles/:id/delete">
                  <DeleteArticle/>
                </Route>

                <Route path="/articles/new">
                  <NewArticle/>
                </Route>

                <Route path="/articles/:id/edit">
                  <EditArticle />
                </Route>

                <Route path="/articles/:id">
                  <ShowArticle />
                </Route>


                <Route path="/articles">
                  <Articles />
                </Route>
                
              </Switch>
            </BrowserRouter> */}
          </div>
  )
}
export default Articles;