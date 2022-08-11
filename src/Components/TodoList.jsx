import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { deleteTodo } from '../Redux-toolkit/TodoSlice'
const TodoList = ({setEditTodoForm,setEditTodo,setEditFormVal}) => {
     const dispatch = useDispatch()
     const todos = useSelector((state)=>state.todo)
     
     const editTodoHandler = (item) =>{
          setEditTodoForm(true)
          setEditTodo(item)
          setEditFormVal(item.title)
     }
  return (
    <div className='todoList-wrapper'>
     {todos.map((item=>{
          const {id,title} = item
          return (
               <div key={id} className="flex flex-row my-2  justify-center">
                    <p className='my-auto mx-2'>{title}</p>
                    <button onClick={()=>editTodoHandler(item)} className='mx-2 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-500'>edit</button>
                    <button onClick={()=>dispatch(deleteTodo(id))} className='mx-2 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-500'>delete</button>
               </div>
          )
     }))}
    </div>
  )
}

export default TodoList
