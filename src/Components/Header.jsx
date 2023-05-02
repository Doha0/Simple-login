import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error);
            })
    }
    return (
        <div >
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Fire-log-reg</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user && <li><Link to='/profile'>User Profile</Link></li>
                        }
                        {
                            user && <li><Link to='/orders'>Orders</Link></li>
                        }
                        <li>{
                            user ? <>
                                <span>{user.email}</span>
                                <button onClick={handelLogOut} className="btn btn-warning">Log Out</button>
                            </>
                                : <Link to='/login'>Login</Link>
                        }
                        </li>
                        <li><Link to='/registration'>Registration</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;