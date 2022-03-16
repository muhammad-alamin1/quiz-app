import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './account.css';
export default function Account() {
    const { currUser, logout } = useAuth();
    return (
        <div class="account">
            {
                currUser ? (
                    <>
                        <span class="material-icons-outlined" title="Account">
                            account_circle
                        </span>
                        <span>{currUser.displayName}</span>
                        <span class="material-icons-outlined" title="Logout" onClick={logout} > logout </span>
                    </>
                ) : (
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>
                )
            }
        </div>
    )
}
