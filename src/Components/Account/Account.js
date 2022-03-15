import React from 'react';
import { Link } from 'react-router-dom';
import './account.css';

export default function Account() {
    return (
        <div class="account">
            <span class="material-icons-outlined" title="Account">
                account_circle
            </span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <span class="material-icons-outlined" title="Logout"> logout </span>
        </div>
    )
}
