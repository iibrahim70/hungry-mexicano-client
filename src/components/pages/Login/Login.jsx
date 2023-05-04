import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
  .catch(err => {
    console.log(err);
  })
  }

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
  .catch(err => {
    console.log(err);
  })
  }

  return (
    
    <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold my-5">Sign in with</h2>
          <button onClick={handleGoogleSignIn} className='btn mr-5'>Sign in with Google</button>
          <button onClick={handleGithubSignIn} className='btn'>Sign in with Github</button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
        <form onSubmit={handleLogin}>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name='email' type="text" placeholder="Email Address" required />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" name='password' type="password" placeholder="Password" required />
      
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to='/register'>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;