import React from 'react'

function Users(props) {
  return (
    <div>
      <h1>Users:</h1>
      {props.users.map((user) => {
          return (
                <div key={user.id}>
                  <h4>{user.username}</h4>
                  <p>{user.email}</p>
                </div>
          )
      })}
    </div>
  )
}

export default Users;