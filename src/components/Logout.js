import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';

function Logout() {

  useEffect( () => {
    axios.delete ('http://localhost:4000/logout',
    { withCredentials: true }
  )}) 

  return (
    <div>
      <Redirect to = '/articles'></Redirect> 
   </div>
  )
  }

export default Logout