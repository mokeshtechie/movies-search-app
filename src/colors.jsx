import React from 'react';
import {useState} from 'react';

 function Colors (){
    let Color = ["red","black","green"];
    let[isBool,setIsBool]= useState([]);
    let [i , Content]= useState(0);
     let Updation = () => {    
       let changeColor = Color[i];
       setIsBool([...isBool , changeColor]);
       Content(i + 1);
     }
    return (
        <div>
           {isBool.map((item,index)=>{
             return <h1 key={index}> {item} </h1>;
            })}
           <button onClick={Updation}>add</button>
        </div>
    );
}

export default Colors;
