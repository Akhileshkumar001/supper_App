import React,{useState} from 'react'

function notes() {
    const[Notes,setNotes]=useState(window.localStorage.getItem("notes"))
    const handleChange=(e)=>{
        setNotes(e.target.value)
        window.localStorage.setItem("notes",JSON.stringify(e.target.value))
        // JSON.stringify(window.localStorage.setItem("notes",e.target.value))
    }
  return (
    <div>
        <p1>Notes</p1>
        <textarea value={Notes} onChange={handleChange}></textarea>
    </div>
    
  )
}

export default notes