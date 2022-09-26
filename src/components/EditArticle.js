import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function EditArticle() {
    const params  = useParams();
    const id = params.id
  
    // const AllArticles  = props.articles;

    // let found = [];
    // const currentarticle = AllArticles.map(myarticle => {
    //   if (myarticle.id == id )
    //   {
    //     found = myarticle;
    //   }
    // })

    const [formValue, setformValue] = React.useState({
        title: '',
        description: '',
        category: ''
    });


    const handleSubmit = (event) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("title", formValue.title)
      loginFormData.append("description", formValue.description)
      loginFormData.append("category", formValue.category)

      try {
        // make axios post request
        const response =  axios({
          method: "put",
          url: ('http://[::1]:4000/articles/' + params.id),
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
        <p>Edit Article: </p>
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
         <input
          type="category"
          name="category"
          placeholder="Choose Category"
          value={formValue.category}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default EditArticle
