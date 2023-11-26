import React , {useState}from 'react';

function Todolist ()  {
   
    let [task,setTask]=useState("")
    let [tasks,settasks]=useState([])
    let [added,addedfunc]=useState(false)
    let [deleted,deletedfunc]=useState(false)
    let changeTask = ({target:{value}})=>{
        setTask(value)
    }
    let addTask=()=>{
        settasks([...tasks,task])
        setTask("")
        addedfunc(true)
        setTimeout(()=>{
            addedfunc(false)
        },2000)
    }
    let deleteTask=(index)=>{

        let remainingTask=tasks.filter((t,i)=>{
         return index!==i;
        })
        settasks(remainingTask)
        deletedfunc(true)
        setTimeout(()=>{
        deletedfunc(false)
    },2000)
}
    
    return (
        <section>
        <div>

           <input type="text" placeholder='task' onChange={changeTask} value={task}/>
           <button onClick={addTask}>add</button>

        </div>        
        <div>
            {tasks.map((t,i) =>{
                return <div key={i}>
                    <span>{t}</span>
                    <button onClick={()=>{
                        deleteTask(i)
                    }}>delete</button>
                </div>
            })}
        </div>
        {added&&<div>you added successfully</div>}
        {deleted&&<div>you deleted successfully</div>}
       </section>
    );
}

export default Todolist;
