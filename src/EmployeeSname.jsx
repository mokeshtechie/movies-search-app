import React from 'react';
import word from './word.module.css'

function EmployeeSname  ({sname,age})  {
    return (
        <div>
            <h1>{sname}</h1>
            
            <div className={word.app}><h6>{age}</h6></div>
        </div>
    );
}

export default EmployeeSname;
