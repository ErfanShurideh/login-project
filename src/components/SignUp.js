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
                isAccepted : true,
            })
        }
    }
 


    return (
        <div className='flex justify-center items-center '>
            <form className=' text-center border-solid p-8 m-8 bg-slate-50 rounded-lg ' onSubmit={submitHandler}>
                <h2 className='p-4 font-bold text-2xl text-blue-500 text-left'>SignUp</h2>
                <div className='flex flex-col p-4 text-left'>
                    <label>Name</label>
                    <input className='border rounded-sm'  type='text' name='name' value={data.name} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.name && touched.name && <span className='text-red-600 '>{errors.name}</span>}
                </div>
                <div className='flex flex-col p-4 text-left'>
                    <label>Email</label>
                    <input className='border rounded-sm' type='text' name='email' value={data.email} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span className='text-red-600 '>{errors.email}</span>}
                </div>
                <div className='flex flex-col p-4 text-left'>
                    <label>Password</label>
                    <input className='border rounded-sm' type='Password' name='password' value={data.password} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.password && <span className='text-red-600 '>{errors.password}</span>}
                </div>
                <div className='flex flex-col p-4 text-left'>
                    <label>ConfirmPassword</label>
                    <input className='border rounded-sm' type='Password' name='confirmPassword' value={data.confirmPassword} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span className='text-red-600 '>{errors.confirmPassword}</span>}
                </div>
                <div className='flex flex-row p-10'>
                    <label>I accept terms of privacy policy</label>
                    <input className='border rounded-sm ' type='checkbox' name='isAccepted' value={data.isAccepted} onChange ={changeHandler} onFocus={focusHandler}/>
                    {errors.isAccepted && touched.isAccepted && <span className='text-red-600 '>{errors.isAccepted}</span>}
                </div>
                <div className='flex justify-between'>
                    <a href='#' className='bg-blue-500 rounded-lg w-14 p-1 text-white font-semibold hover:bg-blue-700 hover:transition-colors'>Login</a>
                    <button type='submit' className='bg-blue-500 rounded-lg w-20 p-1 text-white font-semibold hover:bg-blue-700 hover:transition-colors'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;