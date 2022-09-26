import React from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


const Users_URL = "http://[::1]:4000/users";


function getUserAPI() {
  return axios.get(Users_URL).then((response) => response.data)
}


function Users() {

  const  [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    getUserAPI().then((items) => {
      if (mounted) {
        setUsers(items);
      }
    });

    return () => { (mounted = false) };
  }, []);

  return (
  <div>
    <h1>Users:</h1>
    <div className="container">
      {users.map((user) => {
        return (
                <div key={user.id}>
                  <div className="row justify-content-md-center">
                    <div className="col-8 mt-4">
                      <div className="card text-center shadow mb-5 bg-white rounded">
                        <div className="card-body">
                          <h3 className="card-title"> {user.username} </h3>
                          <p className="card-text">{user.email}</p>
                          <Link to = {'/users/' + user.id + '/view'} className='btn btn-outline-success'>View</Link>
                          <Link to = {'/users/' + user.id + '/edit'} className='btn btn-outline-info'>Edit</Link>
                          <Link to = {'/users/' + user.id + '/delete'} className='btn btn-outline-danger'>Delete</Link>
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


export default Users;