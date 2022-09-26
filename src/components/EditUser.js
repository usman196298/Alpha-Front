import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function EditUser() {
    const params  = useParams();
    const id = params.id
  
    // const AllUsers  = props.users;

    // let found = [];
    // const currentarticle = AllUsers.map(myuser => {
    //   if (myuser.id == id )
    //   {
    //     found = myuser;
    //   }
    // })

    const [formValue, setformValue] = React.useState({
        name: '',
        email: ''
    });


    const handleSubmit = (event) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("username", formValue.name)
      loginFormData.append("email", formValue.email)

      try {
        // make axios post request
        const response =  axios({
          method: "put",
          url: ('http://[::1]:4000/users/' + params.id),
          data: loginFormData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch(error) {
        console.log(error)
      }
    }
  
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Edit User: </p>
        <input
          type="text"
          name="name"
          placeholder="Enter Username"
          value={formValue.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formValue.email}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default EditUser
