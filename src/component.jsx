import React from 'react';
import {list} from './list.js';
import Lister from './react'
import total from './total.module.css'

function Component  () {
    return (
        <div>
            {list.map(({id,sname,info,imgurl})=>
            {
                return <Lister key={id} Name={sname} Info={info} imgurl={imgurl}/>
            })}
            
        </div>
    );
}

export default Component;
