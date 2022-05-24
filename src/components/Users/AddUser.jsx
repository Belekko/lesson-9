import React from 'react'
import style from './AddUser.module'
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