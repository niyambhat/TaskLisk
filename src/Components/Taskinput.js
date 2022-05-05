import React from 'react'
import { useState } from 'react'
import Tasklist from './Tasklist';

function Taskinput() {
const [allTask, setAllTask] = useState([]);
const [searchResults, setSearchResults] = useState([]);
const [newTask, setNewTask] = useState({});

function handleChange(e){
setNewTask({id: Date.now(), name:e.target.value});
}

function handleSubmit(event){
    event.preventDefault();
    const newallTask = allTask.slice();
    newallTask.push(newTask);
    setAllTask(newallTask);
    document.getElementById('enterTask').value = '';
}

function closetask(e){
  e.preventDefault();
  const newArray = allTask.slice()
  newArray.splice(e.target.parentElement.id,1);
  setAllTask(newArray);
}

function search(e){
// const testArray = allTask.slice()
// console.log(testArray)
const resultArray = [];
if(e.target.value !== ""){
  for(let i=0; i<allTask.length; i++){
    if(allTask !== [] && allTask[i].name.startsWith(e.target.value)){
      resultArray.push(allTask[i]);
    }
  }
}
setSearchResults(resultArray);
}

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input id="enterTask" type="text" placeholder='Please enter your task here' onChange={handleChange} />
        <input type="submit" />
    </form>
    <form>
        <input id="enterTask" type="text" placeholder='Search'  onKeyUp={search}/>
    </form>
    <div className="searchList"> {allTask === [] ? null : <Tasklist allTask={searchResults}/>}</div>

    {allTask === [] ? null : <Tasklist allTask={allTask} closetask={closetask}/>}
    </>
  )
}

export default Taskinput