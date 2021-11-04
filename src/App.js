import { useEffect, useState } from 'react';
import './App.css';
import Display from './Display';
import CreateTask from './CreateTask';
import Navbars from './Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
const [open,setOpen]=useState(false);
const [tasks,setTasks]=useState([]);
const httpHeaders = {
  'Content-type': 'application/json'
};

//Data on load
useEffect(()=>{
  const putdata = async() =>{
    setTasks(await values());
  } 
  putdata();
},[])


//Get tasks
const values=async()=>{
  let dataas=await fetch("http://localhost:3000/tasks")
  let fdata= await dataas.json()
  return fdata;
}


//Add tasks
const addTask=async(data)=>{
  let ldata={
    name:data.tname,
    summary:data.tsummary,
    date:data.tdate,
    time:data.time,
    color:data.color
  }
  let dataas=await fetch("http://localhost:3000/tasks",{
    method: 'POST',
    body: JSON.stringify(ldata),
    headers: httpHeaders
  });

  let ttas = await dataas.json()
   setTasks([...tasks,ttas]);
   setOpen(false)
 }


 //Edit tasks
 const editVal=async(data)=>{
  let ldata={
    name:data.tname,
    summary:data.tsummary,
    date:data.tdate,
    time:data.time,
    color:data.color
  }
  let dataas=await fetch(`http://localhost:3000/tasks/${data.id}`,{
    method: 'PUT',
    body: JSON.stringify(ldata),
    headers: httpHeaders
  });
   let ttas = await dataas.json()
   setTasks([...tasks,ttas]);
   setTasks(await values());
   setOpen(false)
 }

 //Delete Task
 const deleteTask=async(data)=>{
  let dataas=await fetch(`http://localhost:3000/tasks/${data.id}`,{
    method: 'DELETE',
    headers: httpHeaders
  });
  setTasks(await values());
 }


 
  const createT=()=>{
    setOpen(!open);
  }

  

  return (
    <div >
      <Navbars createT={createT}   addTask={addTask}/>
      {open && <CreateTask openModal={open} addTask={addTask} />}
      <Display dispTasks={tasks}  deletetask={deleteTask}  addEditValue={editVal}/>
    </div>
  );
}

export default App;
