import React from 'react'

function Categories(props) {
  return (
    <div>
      <h1>Categories:</h1>
      {props.categories.map((category) => {
          return (
                <div key={category.id}>
                  <h4>{category.name}</h4>
                </div>
          )
      })}
    </div>
  )
}

export default Categories;