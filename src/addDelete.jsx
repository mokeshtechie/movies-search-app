import React,{useState }from 'react';

function AddDelete  ()  {
    let [task, setTask]= useState("")
    let [tasks,setTasks]= useState([])
    let changeTask = ({target:{value}})=>{
        setTask(value)
    }
    let addTask =() => {
        setTask([...setTasks,task]);
    }
    return (
        <section>
        <div>
           <input type="text" placeholder='task' onClick={changeTask} value={task} />
           <button onClick={addTask}>add</button>            
        </div>
        <div>
            {tasks.map((t,i)=>
            {
                return <div>
                    <span>{t}</span>
                    <button onClick={()=>
                    {
                        deleteTask(i)
                    }}>delete</button>
                </div>
            })}
        </div>
        </section>
    );
}

export default AddDelete;
