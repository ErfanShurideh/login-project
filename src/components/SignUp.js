import React , { useEffect, useState } from 'react';

import { validate } from './validate';

const SignUp = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false 
    })

    const [errors,setErrors] = useState({});

    useEffect (() =>{
        setErrors (validate(data))
    },[data])

    const changeHandler = event =>{
        if (event.target.name === "isAccepted"){
            setData({...data ,[event.target.name] : [event.target.checked]})
        } else
            setData({...data , [event.target.name] : event.target.value})
    }
    return (
        <div>
            <form className='text-center'>
                <h2 className='m-4 font-bold text-xl'>SignUp</h2>
                <div className=''>
                    <label>Name</label>
                    <input className=''  type='text' name='name' value={data.name} onChange ={changeHandler}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className=''>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange ={changeHandler}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className=''>
                    <label>Password</label>
                    <input type='Password' name='password' value={data.password} onChange ={changeHandler}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className=''>
                    <label>ConfirmPassword</label>
                    <input type='Password' name='confirmPassword' value={data.confirmPassword} onChange ={changeHandler}/>
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className=''>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange ={changeHandler}/>
                    {errors.isAccepted && <span>{errors.isAccepted}</span>}
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