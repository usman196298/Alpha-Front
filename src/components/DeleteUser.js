import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function DeleteUser() {

  const params  = useParams();
  const id = params.id
console.log(id)
  useEffect( () => {
    axios.delete('http://localhost:4000/users/' + id)
  })
  return (
    <div>
      show
      <Redirect to = '/users'></Redirect> 
   </div>
  )
}

export default DeleteUser
