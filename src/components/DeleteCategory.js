import axios from 'axios';
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';

function DeleteCategory() {

  const params  = useParams();
  const id = params.id

  useEffect( () => {
    axios.delete('http://localhost:3000/articles' + id)
  })
  return (
    <div>
      <Redirect to = '/articles'></Redirect> 
   </div>
  )
}

export default DeleteCategory
