import React from 'react'
import axios from 'axios';

function NewArticle() {

    const [formValue, setformValue] = React.useState({
      title: '',
      description: ''
    });
  
    const handleSubmit = (event) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("title", formValue.title)
      loginFormData.append("description", formValue.description)

      try {
        // make axios post request
        const response =  axios({
          method: "post",
          url: "http://[::1]:4000/articles/",
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
        <p>Create New Article: </p>
        <input
          type="text"
          name="title"
          placeholder="Enter title of your article"
          value={formValue.title}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="description"
          name="description"
          placeholder="Enter description"
          value={formValue.description}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default NewArticle
