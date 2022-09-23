import React from 'react'

function Categories(props) {
  return (
    <div>
      <h1>Categories:</h1>
      <div className="container">
        {props.categories.map((category) => {
          return (
                  <div key={category.id}>
                    <div className="row justify-content-md-center">
                      <div className="col-8 mt-4">
                        <div className="card text-center shadow mb-5 bg-white rounded">
                          <div className="card-body">
                            <h3 className="card-title"> {category.id} </h3>
                            <p className="card-text">{category.name}</p>
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


export default Categories;