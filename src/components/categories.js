import React from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Categories_URL = "http://[::1]:4000/categories";

function getCategoryAPI() {
  return axios.get(Categories_URL).then((response) => response.data)
}

function Categories() {

  const  [categories, setCategories] = useState([]);
  
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
    <div>
      <h1>Categories:</h1>
      <div className="container">
        {categories.map((category) => {
          return (
                  <div key={category.id}>
                    <div className="row justify-content-md-center">
                      <div className="col-8 mt-4">
                        <div className="card text-center shadow mb-5 bg-white rounded">
                          <div className="card-body">
                            <h3 className="card-title"> {category.id} </h3>
                            <p className="card-text">{category.name}</p>

                            <Link to = {'/categories/' + category.id + '/view'} className='btn btn-outline-success'>View</Link>
                            <Link to = {'/categories/' + category.id + '/edit'} className='btn btn-outline-info'>Edit</Link>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
          )
        })}
      </div>
    </div>
  )
}


export default Categories;