import React from 'react'

function Users(props) {
  return (
  <div>
    <h1>Users:</h1>
    <div className="conatiner">
      {props.users.map((user) => {
        return (
                <div key={user.id}>
                  <div className="row justify-content-md-center">
                    <div className="col-8 mt-4">
                      <div className="card text-center shadow mb-5 bg-white rounded">
                        <div className="card-body">
                          <h3 className="card-title"> {user.username} </h3>
                          <p className="card-text">{user.email}</p>
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


export default Users;