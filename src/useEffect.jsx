import React from 'react';
import {useEffect,useState}from"react"

function UseEffect  () {
    let [users,setusers]= useState([]);
    useEffect(()=>
    {
        let gitUsers= fetch("https://api.github.com/users");
        gitUsers.then((res)=>
        {
            return res.json();
        })
        .then((appData)=>
        {
            setusers(appData);
            console.log(appData)
        })
    },[])
    console.log(users)
    return (
        <div>
           <ul>
            {users.map(({id,avatar_url})=>
                {
                    return <li key={id}>
                        <img  style={{margin:"50px"}} height="200px" width="200px"src={avatar_url}alt="" />
                    </li>
                })}
           </ul>
        </div>
    );
}

export default UseEffect;
