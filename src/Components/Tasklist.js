import React from 'react'

function Tasklist(props) {
  return (
    <>
    <ul>
    {props.allTask.map((task, index)=>
        <li key={index} id={props.allTask.indexOf(task)}>{task.name}
        <button onClick={props.closetask}>X</button></li>
        )}
    </ul>
    </>
  )
}

export default Tasklist