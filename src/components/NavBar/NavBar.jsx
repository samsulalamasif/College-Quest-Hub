import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const router = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="colleges">Colleges</Link></li>
        <li><Link to="admission">Admission</Link></li>
        <li><Link to="mycollege">My College</Link></li>
    </>

    return (
        <div className="navbar bg-[#e2fffd]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-black dropdown-content mt-3 z-[1] shadow font-semibold rounded-box w-52">
                        {router}
                    </ul>
                </div>
                <Link to="/" className="text-sky-600 font-display font-bold text-3xl">College Quest Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-black text-lg flex gap-6 font-semibold px-1">
                    {router}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="tooltip tooltip-left" data-tip={user.displayName}>
                    <img className='w-12 h-12 p-1 rounded-full' src={user.photoURL} />
                </div>}
                {user ?
                    <button onClick={handleLogOut} className='btn btn-outline btn-sm'>Logout</button> :
                    <Link to="/login">
                        <button className='btn btn-outline btn-sm'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;