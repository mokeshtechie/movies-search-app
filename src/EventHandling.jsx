import React from 'react';

function EventHandling  () 
{
    let getData = (e)=>
    {
        console.log(e.target);
        console.log(e.type);
    }
   

    return (
        <div>
        <button onClick={getData}>click</button> 
        <button onClick={()=>{console.log("arrow function")}}>add</button>   
        </div>
    );
}

export default EventHandling;

