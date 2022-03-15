import React from 'react';
import { Link } from 'react-router-dom';
import Account from '../Account/Account';
import './nav.css';


export default function Nav() {
    return (
        <nav class="nav">
            <ul>
                <li>
                    <Link to="/" class="brand">
                        <h3>Programming Quiz</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    )
}
