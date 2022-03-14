import React from 'react';
import './login.css';

export default function Login() {
    return (
        <>
            <div className="column">
                <h3>Sign In Your Account</h3> <br />
                <form className="login form" action="#">
                    <div className="textInput">
                        <input type="text" placeholder="E-mail" />
                        <span className="material-icons-outlined"> alternate_email </span>
                    </div> <br />

                    <div className="textInput">
                        <input type="password" placeholder="Password" />
                        <span className="material-icons-outlined"> lock </span>
                    </div> <br />

                    <button className="button">
                        <span>Sign In</span>
                    </button>

                    <div className="info">Don't have an account? <a href="#">Signup</a> </div>
                </form>
            </div>
        </>
    )
}
