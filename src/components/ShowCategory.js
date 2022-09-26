import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function get_category_data(category_URL) {
   return axios.get(category_URL).then((response) => response.data)
}

function ShowCategory() {
    const params=useParams();
    const category_URL = ("http://[::1]:4000/categories/"+params.id);

    <h1>Show Category: </h1>

    const [category, setCategory] = useState([]);
    useEffect(() => {
        let mounted = true;
        get_category_data(category_URL).then((item) => {
            if (mounted) {
                setCategory(item);
            }
        });
        return () => { (mounted = false) };
    }, []);
        return (
          <div key={category.id}>
            <div className="row justify-content-md-center">
              <div className="col-8 mt-4">
                <div className="card text-center shadow mb-5 bg-white rounded">
                  <div className="card-body">
                    <h3 className="card-title"> {category.id} </h3>
                    <h3 className="card-title"> {category.name} </h3>
                    <Link to = {'/users/' + category.id + '/edit'} className='btn btn-outline-info'>Edit</Link>
                    <Link to = {'/users/' + category.id + '/delete'} className='btn btn-outline-danger'>Delete</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}
export default ShowCategory