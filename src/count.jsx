import { useEffect } from "react";
import React,{useState} from 'react';



const Count = () => {
    let [Counter, setCount]=useState(0);
    let [count1,setCount1]=useState(0);
    useEffect(()=>
    {
        console.log("useffect")        
    },[Counter])
    let updateCounter=()=>
    {
        setCount(Counter+1)
    }

    let updateCounter1=()=>
    {
        setCount1(count1+1)
    }
    return (
        <div>
            <h1>count:{Counter}</h1>
            <button onClick={updateCounter}>update</button>
            <h1>count1:{count1}</h1>
            <button onClick={updateCounter1}>update</button>
            
        </div>
    );
}

export default Count;
