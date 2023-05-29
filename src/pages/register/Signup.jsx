import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
  const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; 

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value; 
    const email = form.email.value; 
    const password = form.password.value; 
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    createUser(email, password)
    .then(res => {
      const createdUser = res.user; 
      console.log(createdUser);
      navigate(from);
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
        <div className="text-center md:text-left py-4">
          <h2 className="text-xl font-bold my-5">Register with</h2>
          <button onClick={handleGoogleSignIn} className='btn mr-5'>Sign In with Google</button>
          <button onClick={handleGithubSignIn} className='btn'>Sign In with Github</button>
        </div>
        <form onSubmit={handleRegister}>
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
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to='/signin'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;