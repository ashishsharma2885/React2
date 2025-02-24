import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const App = () => {

  const { users } = useSelector((state) => state.UserReducers);
  
  return (
    <div className='m-auto container p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>User List</h1>
      <ul>
      {users.map((user)=>{
        return <li key={user.id}>
          <h1>{user.name}</h1>
        </li>
      })} 
      </ul>
    </div>
  )
}

export default App