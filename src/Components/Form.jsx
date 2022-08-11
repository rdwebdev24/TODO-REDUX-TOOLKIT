import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo, EditTodoItem} from '../Redux-toolkit/TodoSlice';
import { useFormik } from "formik";

const Form = ({setEditTodoForm,editTodoForm,editTodo,editFormVal}) => {
     const dispatch = useDispatch();
     const [showForm,setShowForm] = useState(false)
     
     const initialValues = {
          name: "",
     };

     const onSubmit = (values) =>{
          if(showForm){
               if(!values.name){
                    alert('cant set Empty item')
               }else{
                    dispatch(addTodo(values.name))
                    setShowForm(false)
               }
          }
          if(editTodoForm){
               const editVal = {
                    id:editTodo.id,
                    title:values.name
               }
               console.log("dispatched")
               dispatch(EditTodoItem(editVal))
               setEditTodoForm(false)
          }
          values.name = ""
     }

     const formik = useFormik({
          initialValues,
          onSubmit,
          // validate,
        })

  return (
   
    <div>

     <button onClick={()=>setShowForm(true)} className='px-3 py-2 rounded bg-cyan-500 text-white'>Add item</button>

     {showForm? <form className="addForm" onSubmit={formik.handleSubmit}>
          <input type="text" 
           name="name"
           value={formik.values.name}
           onChange={formik.handleChange}/>
          <div className="btn-wrapper flex flex-row">
          <button type='submit' className=' mx-2 bg-red-600 hover:bg-red-500 text-white rounded px-3 py-2'>Add</button>
          <button onClick={()=>setShowForm(false)} className=' mx-2 bg-red-600 hover:bg-red-500 text-white rounded px-3 py-2'>discard</button>
          </div>
     </form>:null}


     {editTodoForm? <form className="EditForm" onSubmit={formik.handleSubmit}>
          <input type="text" 
           name="name"
           value={formik.values.name}
           onChange={formik.handleChange}/>
          <div className="btn-wrapper flex flex-row">
          <button type='submit' className=' mx-2 bg-red-600 hover:bg-red-500 text-white rounded px-3 py-2'>Edit</button>
          <button onClick={()=>setEditTodoForm(false)} className=' mx-2 bg-red-600 hover:bg-red-500 text-white rounded px-3 py-2'>discard</button>
          </div>
     </form>:null}


    


      {/* <form className='Form' onSubmit={formik.handleSubmit}>
          <div className="form-wrapper">
               <input type="text" 
               name="name"
               value={formik.values.name}
               onChange={formik.handleChange}
               className='border-2 border-gray-800'/>
               <button type='submit' className='mx-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded px-3 py-2'>Add</button>
          </div>
      </form> */}
    </div>
  )
}

export default Form
