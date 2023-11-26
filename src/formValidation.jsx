import React from 'react';
import {useEffect} from 'react';
import{useState} from 'react';
 function FormValidation () {
    let [Count,setCount]= useState(0);
   
    useEffect(()=>
    {
        console.log("useEffect");
    },[Count]);

    let updateCounter =()=>
    {
        setCount(Count+1)
    }
   console.log("rendered");

    return (
        <div>
           <h1>count:{Count}</h1>
           <button onClick={updateCounter}>update</button>
        </div>
    );
}

export default FormValidation;
