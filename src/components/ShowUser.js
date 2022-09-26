import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function get_user_data(user_URL) {
   return axios.get(user_URL).then((response) => response.data)
}

function ShowUser() {
    const params=useParams();
    const user_URL = ("http://[::1]:4000/users/"+params.id);

    <h1>Show User: </h1>

    const [user, setUser] = useState([]);
    useEffect(() => {
        let mounted = true;
        get_user_data(user_URL).then((item) => {
            if (mounted) {
                setUser(item);
            }
        });
        return () => { (mounted = false) };
    }, []);
        return (
          <div key={user.id}>
            <div className="row justify-content-md-center">
              <div className="col-8 mt-4">
                <div className="card text-center shadow mb-5 bg-white rounded">
                  <div className="card-body">
                    <h3 className="card-title"> {user.username} </h3>
                    <p className="card-title"> {user.email} </p>
                    <Link to = {'/users/' + user.id + '/edit'} className='btn btn-outline-info'>Edit</Link>
                    <Link to = {'/users/' + user.id + '/delete'} className='btn btn-outline-danger'>Delete</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}
export default ShowUser

