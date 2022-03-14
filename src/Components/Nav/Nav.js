import React from 'react';
import Account from '../Account/Account';
import './nav.css';


export default function Nav() {
    return (
        <nav class="nav">
            <ul>
                <li>
                    <a href="index.html" class="brand">
                        <h3>Programming Quiz</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    )
}
