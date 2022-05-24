import React from 'react'

const AddUser = () => {
  return (
    <form>
      <label htmlFor="username">username</label>
      <input type="text" id='username'/>
      <label htmlFor="age">age</label>
      <input type="number" id='age' />
      <button>Add User</button>
    </form>
  )
}

export default AddUser