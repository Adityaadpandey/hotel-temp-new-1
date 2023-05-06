import React from 'react'

const Test = () => {
    const user = JSON.parse(localStorage.getItem('credentialResponse'))
  return (
      <>
      <h2>Welcome {user.profileObj.name}!</h2>
          <p>Email: {user.profileObj.email}</p>
          <img src={user.profileObj.imageUrl} alt={user.profileObj.name} />
      </>
  )
}

export default Test