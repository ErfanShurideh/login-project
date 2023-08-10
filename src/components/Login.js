import React , { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { validate } from './validate';
import { notify } from './notify';
const Login = () => {
    const [data,setData] = useState({
        email : "",
        password : ""
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
            notify("You loged in successfully!" , "success");
        }else {
            notify("invalid data!" , "error")
            setTouched({
                email : true,
                password : true,
            })
        }
    }
 


    return (
        <div className='flex justify-center items-center '>
            <form className=' text-center border-solid p-4 m-4 bg-slate-100 rounded-lg h-80 w-96' onSubmit={submitHandler}>
                <h2 className='p-4 font-bold text-2xl text-blue-500 text-left'>Login</h2>
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
                <div className='flex justify-between'>
                    <Link to='/SignUp' className=' rounded-lg w-24 p-1 text-blue-500 font-semibold hover:text-blue-700 hover:transition-colors'>Sign Up</Link>
                    <button type='submit' className='bg-blue-500 rounded-lg w-20 p-2 text-white font-semibold hover:bg-blue-700 hover:transition-colors'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;