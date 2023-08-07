import React , { useState } from 'react';

const SignUp = () => {
    const [data,setdata] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false 
    })
    return (
        <div>
            <form className='text-center'>
                <h2 className='m-4 font-bold text-xl'>SignUp</h2>
                <div className=''>
                    <label>Name</label>
                    <input className=''  type='text' name='name' value={data.name}/>
                </div>
                <div className=''>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email}/>
                </div>
                <div className=''>
                    <label>Password</label>
                    <input type='Password' name='Password' value={data.password}/>
                </div>
                <div className=''>
                    <label>ConfirmPassword</label>
                    <input type='Password' name='confirmPassword' value={data.confirmPassword}/>
                </div>
                <div className=''>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted}/>
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