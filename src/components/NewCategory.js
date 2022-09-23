import React from 'react'
import axios from 'axios';

function NewCategory() {

    const [formValue, setformValue] = React.useState({
      name: ''
    });
  
    const handleSubmit = (event) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("name", formValue.name)

      try {
        // make axios post request
        const response =  axios({
          method: "post",
          url: "http://[::1]:4000/categories/",
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
        <p>Create New Category: </p>
        <input
          type="text"
          name="name"
          placeholder="Enter name of your Category"
          value={formValue.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default NewCategory
