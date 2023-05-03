import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <form className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left my-5">
          <h2 className="text-center text-xl font-bold">Register Here</h2>
        </div>
        <input className="text-sm w-full mb-4 px-4 py-2 border border-solid border-gray-300 rounded" type="text" name='name' placeholder="Full Name" required/>
        <input className="text-sm w-full mb-4 px-4 py-2 border border-solid border-gray-300 rounded" type="text" name='email' placeholder="Email Address" required />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="password" name='password' placeholder="Password"  required/>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name='photo' placeholder="Photo URL" required />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Register</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to='/login'>Login</Link>
        </div>
      </div>
    </form>
  );
};

export default Register;