import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { user, userSignIn, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider;

    const handelLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        userSignIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    const handelGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6"></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body p-12">
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handelGoogleSignIn} className="btn bg-white text-black hover:bg-slate-300">Sign Up With Google</button>
                        </div>
                        <div>
                            <label className="label">
                                <Link to='/registration' className="label-text-alt text-blue-600 link link-hover">New to fireLog? register now </Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;