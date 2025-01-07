import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components';

const submitForm = (e)=>{
  e.preventDefault()
}

const Login = () => {
  return (<>
  <Navbar></Navbar>
    <main className=" h-screen flex items-center justify-center bg-base-300">
      <form className="flex flex-col items-center justify-center min-h-[400px] h-[45%] w-full max-w-md mx-auto mt-5 bg-white/40 rounded-lg backdrop-blur-md border-2 border-white/10 shadow-lg p-6 lg:w-1/4" onSubmit={submitForm}>
        <h3 className="text-2xl font-normal mt-2 mb-2">Login</h3>
        <p className='text-sm opacity-60'>Note: This project doesn't have user authentication. I have one implemented in my older Django project.</p>
        <label htmlFor="email" className="self-start ml-8 mt-8 text-black text-sm font-light">Email:</label>
            <input type="text" placeholder="Email Address" className="h-9 w-4/5 bg-white/20 border border-black/30 rounded-md px-2 mt-2 text-sm font-light focus:outline-none focus:ring-2 focus:ring-black/20" />
        <label htmlFor="password" className="self-start ml-8 mt-8 text-black text-sm font-light">Password:</label>
            <input type="password" placeholder="Password" className="h-9 w-4/5 bg-white/20 border border-black/30 rounded-md px-2 mt-2 text-sm font-light focus:outline-none focus:ring-2 focus:ring-black/20" />
        <div className="self-start ml-8 mt-2 mb-4 flex items-center">
        <input type="checkbox" className="h-4 w-4 mr-2" name="checkbox" />
        <label htmlFor="checkbox" className="text-black text-xs font-light">Remember me</label>
        </div>

        <button className="w-4/5 bg-[#B98E2F] text-white py-2 mt-4 mb-5 text-sm font-medium rounded-md transition-transform transform hover:shadow-lg hover:-translate-y-1">LOGIN</button>
        <p className='font-light text-black text-sm'>Not a member yet? <Link className='underline text-blue-800' to="/register"> Sign up!</Link></p>
      </form>
    </main>
    </>
  );
};

export default Login;
