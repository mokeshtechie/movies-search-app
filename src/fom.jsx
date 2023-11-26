import React,{useState} from 'react';
import Form from "./fom.module.css"

function Fom  ()  {
        let [input,setinput]=useState({
            Fn:'',
            Ln:'',
            age:'',
            email:'',
            pass:'',
            cpass:'',
            phoneno:'',

        });
        let [final,end]=useState({Fn:"",})
        let[storedDetial,setstoreddetial]=useState([]);
        let [submited,setSubmited]=useState("");
        let updateInput = ({target:{value,name}})=>
        {
           setinput({...input,[name]:value});
        }
        let sendData=(e)=>{
            e.preventDefault();
            setSubmited(false);
            setstoreddetial([...storedDetial,input]);
        }
    return (
        <div className={Form.module}>
            { submited ?
            (
        <div>
            <form onSubmit={sendData}>
            <input type="text" placeholder='fristName' onChange={updateInput} name="Fn" required/>
            <input type="text" placeholder='lastName' onChange={updateInput} name="Ln" required />
            <input type="text" placeholder='age' onChange={updateInput} name="age" required />
            <input type="email" placeholder='email' onChange={updateInput} name="email" required />
            <input type="password" placeholder='password'onChange={updateInput} name="pass"  />
            <input type="password" placeholder='confirmpassword' onChange={updateInput} name="cpass" />
            <input type="text" placeholder='phoneno' onChange={updateInput} name="phoneno" />
            <button type="submit">submit</button>
            </form>           
        </div>
        ):(
            <div>
                {storedDetial.map((detials,index) => 
                    (
                    <div key={index}>
                        <h4>fullName:{detials.Fn}{detials.Ln}</h4>
                        <h4>age:{detials.age}</h4>
                        <h4>Email:{detials.email}</h4>
                        <h4>phone:{detials.phoneno}</h4>
                    </div>
                        ))}
            </div>
        )
        }
        </div>
    );
}

export default Fom;
