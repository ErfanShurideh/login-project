import React , { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './notify';

const SignUp = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false 
    })

    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});


    useEffect (() =>{
        setErrors (validate(data))
    },[data , touched])

    const changeHandler = event =>{
        if (event.target.name === "isAccepted"){
            setData({...data ,[event.target.name] : [event.target.checked]})
        } else
            setData({...data , [event.target.name] : event.target.value})
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name] : true})
    }

    const submitHandler = event =>{
        event.preventDefault();
        if (!Object.keys(errors).length){
            notify("You signed in successfully!" , "success");
        }else {
            notify("invalid data!" , "error")
            setTouched({
                name : true,
                email : true,
                password : true,
                confirmPassword : true,
                isAccepted : true
            })
        }
    }
 


    return (
        <div>
            <form className='text-center' onSubmit={submitHandler}>
                <h2 className='m-4 font-bold text-xl'>SignUp</h2>
                <div className=''>
                    <label>Name</label>
                    <input className=''  type='text' name='name' value={data.name} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className=''>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className=''>
                    <label>Password</label>
                    <input type='Password' name='password' value={data.password} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className=''>
                    <label>ConfirmPassword</label>
                    <input type='Password' name='confirmPassword' value={data.confirmPassword} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className=''>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div>
                    <a href='#'>Login</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;