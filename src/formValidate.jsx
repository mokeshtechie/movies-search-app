import React,{useState}from 'react';
import form  from "./files/form.module.css"

const FormValidate = () => {
    let [formData,setFormdata]=useState({
        fn:"",
        mob:"",
        email:"",
        pwd:""
    })
    let [error,setError]=useState({})
    let changeFormdata = ({target:{name,value}})=>
    {
        setFormdata({...formData,[name]:value})
    }
    let submitFormdata=(e)=>
    {
        e.preventDefault();
        setError(validate(formData));
    }
    let validate=(fdata)=>
    {
        let errorMessage={};
        if(!fdata.fn)
        {
            errorMessage.fnMessage="fullName is mandatory"
        }
        else if(fdata.fn.lenght<6)
        {
            errorMessage.fnMessage="fullName should contain atlest 6 character"
        }
        if(!fdata.mob)
        {
            errorMessage.mobMessage="mobile is madatory"
        }
        return errorMessage
    }
    console.log(error)
    return (
        <div>
            <form onSubmit={submitFormdata} className={form.outer}>
                <div>
                    <input type="text" placeholder='fullname' name='fn' value={formData.fn} onChange={changeFormdata} className={form.content} />
                    <small>{error.fnMessage&&error.fnMessage}</small>
                </div>
                <div>
                    <input type="text" placeholder='Mobile' name="mob" value={formData.mob} onChange={changeFormdata} className={form.content}/>
                    <small>{error.mobMessage&& error.mobMessage}</small>
                </div>
                <div>
                    <input type="text" placeholder='email' name='email' value={formData.email} onChange={changeFormdata}  className={form.content} />

                </div>
                <div>
                    <input type="password" placeholder='password'name="pwd" value={formData.pwd} onChange={changeFormdata}   className={form.content}/>
                </div>
                <div>
                    <button type='submit' className={form.btn}>register</button>
                </div>
            </form>
        </div>
    );
}

export default FormValidate;
