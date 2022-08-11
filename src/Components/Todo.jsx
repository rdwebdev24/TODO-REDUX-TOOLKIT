import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import '../Components/Todo.css'
import { useState } from 'react'

const Todo = () => {
     const [editTodoForm,setEditTodoForm] = useState(false)
     const [editTodo , setEditTodo] = useState()
  return (
    <div className='todo-wrapper w-50 mx-auto my-5 text-center'>
      <h1 className='py-3 font-semibold text-3xl'>Todo App</h1>
     <Form  editTodo={editTodo} editTodoForm={editTodoForm} setEditTodoForm={setEditTodoForm}/>
     <TodoList  setEditTodo={setEditTodo}  setEditTodoForm={setEditTodoForm}/>
     
    </div>
  )
}

export default Todo
