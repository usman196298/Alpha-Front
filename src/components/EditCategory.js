import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditCategory() {

    const [formValue, setformValue] = React.useState({
      name: ''
    });

    const params  = useParams();
  
    const handleSubmit = (event) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("name", formValue.name)

      try {
        // make axios post request
        const response =  axios({
          method: "put",
          url: ('http://[::1]:4000/categories/' + params.id),
          data: loginFormData,
          headers: { "Content-Type": "form-data" },
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
      <div>
        Category ID: {params.id} 
      </div>

      <form onSubmit={handleSubmit}>
        <p>Edit Category: </p>
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

export default EditCategory