import React from 'react'

function Articles(props) {
  return (
    <div>
      <h1>Articles:</h1>
      {props.articles.map((article) => {
          return (
                <div key={article.id}>
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>
                </div>
          )
      })}
    </div>
  )
}
export default Articles;