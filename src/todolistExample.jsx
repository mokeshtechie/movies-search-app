import React,{useState} from 'react';

function TodolistExample  ()  {
    let [list,settask]=useState("")
    let [List,setTask]=useState([])
    let [added,addedfunc]=useState(false)
    let [deleted,deletedfunc]=useState(false)
    let changeTask = ({target:{value}}) =>{
        settask(value)
    }
    let addTask =()=>{
        setTask([...List,list])
        settask("")
        addedfunc(true)
        setTimeout(()=>{
            addedfunc(false)
        },2000)
    }
    let deleteTask =(index)=>{
        let remaining = List.filter((t,i)=>{
            return index!=i;
        })
         setTask(remaining)
         deletedfunc(false)
         setTimeout(()=>{
            deletedfunc(true)
         },2000)
    }
   
    
    return (
        <section>
        <div>
            <input type="text" onChange={changeTask} value={list}/>
            <button onClick={addTask}>add</button>
        </div>
       <div> 
        { List.map((t,i)=>{
           return <div key={i}>
             <span>{t}</span>
             <button onClick={()=>{deleteTask(i)}}>delete</button>
           </div>          
            })}

        </div>
        <div>
            {added &&" you  successfully added"};
            {deleted&&"you are successdfully deleted"};
        </div>
        </section>
    );
}

export default TodolistExample;
