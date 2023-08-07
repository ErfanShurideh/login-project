import React , { useState } from 'react';

import { validate } from './Validate';

const SignUp = () => {
    const [data,setdata] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false 
    })
    

    const changeHandler = event =>{
        if (event.target.name === "isAccepted"){
            setdata({...data ,[event.target.name] : [event.target.cheked]})
        } else
            setdata({...data , [event.target.name] : [event.target.value]})
    }
    return (
        <div>
            <form className='text-center'>
                <h2 className='m-4 font-bold text-xl'>SignUp</h2>
                <div className=''>
                    <label>Name</label>
                    <input className=''  type='text' name='name' value={data.name} onChange ={changeHandler}/>
                </div>
                <div className=''>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange ={changeHandler}/>
                </div>
                <div className=''>
                    <label>Password</label>
                    <input type='Password' name='password' value={data.password} onChange ={changeHandler}/>
                </div>
                <div className=''>
                    <label>ConfirmPassword</label>
                    <input type='Password' name='confirmPassword' value={data.confirmPassword} onChange ={changeHandler}/>
                </div>
                <div className=''>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange ={changeHandler}/>
                </div>
                <div>
                    <a href='#'>Login</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;