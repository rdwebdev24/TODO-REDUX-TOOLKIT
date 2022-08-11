import {createSlice} from '@reduxjs/toolkit'


const todoSlice = createSlice({
     name:"todos",
     initialState:[
          {id:1,title:"todo1"},
          {id:2,title:"todo2"},
          {id:3,title:"todo3"},
     ],
     reducers:{
          addTodo:(state,action)=>{
               const newTodo = {
                    id:Date.now(),
                    title:action.payload,
               };
               state.push(newTodo)
          },
          deleteTodo:(state,action)=>{
               return state.filter((todo)=>todo.id!==action.payload)
          },
          EditTodoItem:(state,action)=>{
               const updatedTodo = []
               state.map((item)=>{
                    if(item.id===action.payload.id){
                         item.id = action.payload.id
                         item.title = action.payload.title
                    }
                    updatedTodo.push(item)
               })
               // console.log("state : ",state," action : ",action.payload)
          }
     }
})

export const {addTodo,deleteTodo,EditTodoItem} = todoSlice.actions;
export default todoSlice.reducer;