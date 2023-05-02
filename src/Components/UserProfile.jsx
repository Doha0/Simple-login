import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>User Profile</h1>
            <h2>Mail: {user.email}</h2>
        </div>
    );
};

export default UserProfile;