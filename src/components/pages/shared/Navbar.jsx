import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-slate-400'>
      <div className="navbar w-4/5 mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Hungry Mexicano</a>
        </div>
        <div className="flex-1 gap-5">
          <Link className='normal-case text-xl'>Home</Link>
          <Link className='normal-case text-xl'>Blog</Link>
        </div>
        <div className="flex-none gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;