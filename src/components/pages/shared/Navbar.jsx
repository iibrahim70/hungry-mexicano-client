import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='bg-slate-400'>
      <div className="navbar lg:w-4/5 mx-auto">
        <div className="flex-1">
          <Link className="normal-case lg:text-xl" to='/'>Hungry Mexicano</Link>
        </div>
        <div className="flex-1 gap-5">
          <Link className='normal-case lg:text-xl'>Home</Link>
          <Link className='normal-case lg:text-xl'>Blog</Link>
        </div>
        { user ? <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div> : <Link to='/login'><button>Login</button></Link>}
      </div>
    </div>
  );
};

export default Navbar;