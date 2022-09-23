import React from 'react'

function Articles(props) {
  return (
          <div>
            <h1>Articles:</h1>
            <div className="conatiner">
              {props.articles.map((article) => {
                return (
                        <div key={article.id}>
                          <div className="row justify-content-md-center">
                            <div className="col-8 mt-4">
                              <div className="card text-center shadow mb-5 bg-white rounded">
                                <div className="card-body">
                                  <h3 className="card-title"> {article.title} </h3>
                                  <p className="card-text">{article.description}</p>
                                </div>
                                <div className="card-footer text-muted">
                                  {/* <small>Created  TimeAgo{article.created_at} ago,
                                        Edited TimeAgo{article.updated_at} ago </small> */}
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
export default Articles;