import React from 'react';
import './account.css';

export default function Account() {
    return (
        <div class="account">
            <span class="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="#">Signup</a>
            {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
        </div>
    )
}
