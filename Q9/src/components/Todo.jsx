import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from '../redux/actions/addtodo';
import { updatetodo } from '../redux/actions/updatetodo';
import { deletetodo } from '../redux/actions/deletetodo';

const Todo = () => {
  const todoarr = useSelector(store => store)
  const[title, settitle] = useState('')
  const[iscomplete, setiscomplete] = useState(false)
  const dispatch = useDispatch()
  function handleclick(){
    if(title == ""){
      alert("fill title")
      return
    }
    dispatch(addtodo({title:title, status:iscomplete, id:todoarr.length+1}))
    settitle("")
    setiscomplete(false)
  }
  function handleupdate(id){
    dispatch(updatetodo(id))
  }
  function handledelete(id){
    dispatch(deletetodo(id))
  }
  return (
    <div>
      <label htmlFor="">Title</label>
      <input type="text" 
      value={title}
      onChange={(e)=>settitle(e.target.value)}
      />
      <label htmlFor="">Status</label>
      <input type="checkbox" 
      checked={iscomplete}
      onChange={()=>setiscomplete(!iscomplete)}
      />
      <button onClick={handleclick}>Submit todo</button>
      {
        todoarr.map((todoobj, index) =>{
          return(
            <div key={index}>
            <p>No.{todoobj.id}</p>
            <p>title:{todoobj.title}</p>
            <button onClick={()=>handleupdate(todoobj.id)}>{todoobj.status ? "Completed":"uncomplete"}</button>
            <button onClick={()=>handledelete(todoobj.id)}>delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Todo