import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase-config';


const auth = getAuth(app)
const Registration = () => {
    const { createUser, logOut, google, } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        setError("")
        setSuccess("")
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch((error) => console.log(error))
                console.log(createdUser);
                form.reset()
                setSuccess("Your account successfully created.Thank you.")
                logOut()
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const googleHandler = () => {
        google()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                setError(error.message);
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl mt-20 mb-10 font-bold">Registration Now!</h1>
                </div>
                <div className="card  bg-[#adecfb] flex-shrink-0 w-full max-w-sm shadow-2xl mb-10 ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <span className="label-text text-red-600">{error}</span>
                        <span className="label-text text-cyan-500">{success}</span>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Register</button>
                        </div>
                        <span className="label-text">
                            Already Have an Account? <Link className='text-cyan-500' to="/login">Login</Link>
                        </span>
                    </form>
                    <button onClick={googleHandler} className='flex justify-center mb-5'>
                        <img className='w-56 h-14 rounded-2xl' src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Registration;