import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';


function Check() {
  const  [users, setUsers] = useState([]);
  axios.get("http://localhost:4000/check",
    { withCredentials: true }
  ).then(response => {
      setUsers(user=> true);
      // console.log("response",response.data.user);
      console.log("Users: ",users)
  })
    .catch(err => {
        // setError(error=> true);
    })
  }
    
export default Check


// console.log("users",users);