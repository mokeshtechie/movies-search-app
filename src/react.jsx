import {useState} from 'react';

function React({Name,Info,imgurl}){
    let[isBool,setIsBool] = useState(false) 
    let toggleContent = ()=>{
       setIsBool(!isBool)
    }
    return (
        <div>
            <>
            <div >
                <div>
                    <h4>{Name}</h4>
                    {isBool?<i class="fa fa-arrow-down" aria-hidden="true" onClick={toggleContent}></i>:<i class="fa fa-arrow-up" aria-hidden="true" onClick={toggleContent}></i>}
                </div>
                <div>
                    <p>{isBool?Info:""}</p>
                </div>
                <div>
                  <img src={isBool?imgurl:""} height={isBool?"300px":""} width={isBool?"300px":""}/>
                </div>
            </div>
            </>
        </div>
    );
}

export default React;
