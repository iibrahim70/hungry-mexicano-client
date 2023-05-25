import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../components/activelink/ActiveLink';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then()
    .catch(err => console.error(err));
  }

  return (
    <div className='bg-base-300'>
      <div className="navbar px-5">
        <div className="flex-1">
          <Link className="normal-case text-base font-bold lg:text-xl" to='/'>Hungry Mexicano</Link>
        </div>
        <div className="flex-1 gap-5 hidden lg:flex">
          <ActiveLink className='normal-case lg:text-xl' to='/'>Home</ActiveLink>
          <ActiveLink className='normal-case lg:text-xl' to='/blog'>Blog</ActiveLink>
        </div>
        { user ? <div className="flex-none gap-10">
        <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip={user?.displayName}>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full" >
              <img src={user?.photoURL} />
            </div>
          </label>
        </div>
          <button onClick={handleLogout} className="hidden lg:flex btn btn-outline btn-primary">Signout</button>
        </div> : <ActiveLink to='/login'><button>Login</button></ActiveLink>}
      </div>
    </div>
  );
};

export default Navbar;