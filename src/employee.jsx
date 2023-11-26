import React from 'react';
import {employeeList} from './employeeDetials'
import EmployeeContent from "./EmployeeContent"
import Empcss from "./employee.module.css"

function Employee  ()  {
    return (
        <div className={Empcss.empcss}>
            {employeeList.map(({id,sname,age,imgurl})=>
            {
                return<EmployeeContent key={id} sname={sname} age={age} imgurl={imgurl}/>
            })}
        </div>
    );
}

export default Employee;
