import React from 'react';
import EmployeeImages from './EmployeeImages';
import EmployeeSname from './EmployeeSname';
import empstyle from './Employeecotent.module.css'

function EmployeeContent  ({imgurl,age,sname}) {
    return (
        <div className={empstyle.card}>
            <EmployeeImages imgurl={imgurl}/>
            <EmployeeSname age={age} sname={sname}/>

        </div>
    );
}

export default EmployeeContent;
