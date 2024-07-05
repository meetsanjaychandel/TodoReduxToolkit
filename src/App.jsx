import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
      <h1 className='bg-orange-800 text-center text-white-700'>redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
