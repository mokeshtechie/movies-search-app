import React from 'react';

function EmployeeImages  ({imgurl})  {
    return (
        <div>
           <img src={imgurl} style={{height:"320px",width:"300px"}} alt="no image" /> 
        </div>
    );
}

export default EmployeeImages;