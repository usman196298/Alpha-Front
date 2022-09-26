import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function get_article_data(article_URL) {
   return axios.get(article_URL).then((response) => response.data)
}

function ShowArticle() {
    const params=useParams();
    const user_URL = ("http://[::1]:4000/articles/"+params.id);

    <h1>Show Article: </h1>

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
          <div key={article.id}>
            <div className="row justify-content-md-center">
              <div className="col-8 mt-4">
                <div className="card text-center shadow mb-5 bg-white rounded">
                  <div className="card-body">
                    <h3 className="card-title"> {article.title} </h3>
                    <p className="card-title"> {article.description} </p>
                    <Link to = {'/users/' + article.id + '/edit'} className='btn btn-outline-info'>Edit</Link>
                    <Link to = {'/users/' + article.id + '/delete'} className='btn btn-outline-danger'>Delete</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default ShowArticle
