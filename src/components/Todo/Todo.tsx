"use client"
import React, { useState } from 'react'

interface item {
  id:number;
  text:string;
  completed:boolean
}



const Todo : React.FC = () => {
  const [input,setInput] = useState<string>("")
  const [todos ,setTodos] = useState<item[]>([
    {id:1,text:"Learn Type Script",completed:false},
    {id:2,text:"Learn Javascript",completed:false},
    {id:3,text:"Build Todo List",completed:false},
  ])

  const handleToogle = (id:number)=>{
    setTodos(
      todos.map((todo)=>{
        if(todo.id===id)  {
          return {...todo,completed:!todo.completed}
        }
        return todo; 
  })
    )
  }
  const handleAdd = () => {
  
  const newTodo : item = {id:todos.length,text:input,completed:false}
     setTodos((todo)=>[
    ...todo,newTodo
   ])
   setInput("")
  };
  return (
    <div style={{background:'white',width:'400px',height:'600px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
     <h1 style={{fontFamily:'Poppins' }} >Todo List</h1>
   

    <ul>
      {todos.map((todo)=>(
    <li key={todo.id} style={{fontFamily:'Poppins' , fontSize:'15px',fontWeight:'600', textDecoration:todo.completed ? "line-through" : 'none' }} onClick={()=>handleToogle(todo.id)}  >{todo.text}</li>
      ))}
   
    </ul>


    <input value={input} style={{width:'200px',height:'45px',borderRadius:'25px',padding:'2rem',fontFamily:'Poppins' , fontSize:'15px'}} onChange={(e)=>setInput(e.currentTarget.value)}  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }}  type='text' placeholder='Add a todo'/>

    <button style={{width:'150px',height:'45px',borderRadius:'25px',background:'yellow',cursor:'pointer',marginBottom:'2rem'}} onClick={()=>handleAdd()} >Add</button>


    </div>
  )
}

export default Todo