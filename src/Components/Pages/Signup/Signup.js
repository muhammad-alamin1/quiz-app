import React from 'react';
import './signup.css';

export default function Signup() {
    return (
        <>
            <div className="column">
                <h3>Create an account</h3>
                <form className="signup form" action="#">
                    <div className="textInput">
                        <input type="text" placeholder="Full name" />
                        <span className="material-icons-outlined"> person </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Username (unique)" />
                        <span className="material-icons-outlined"> person </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="E-mail" />
                        <span className="material-icons-outlined"> alternate_email </span>
                    </div>

                    <div className="textInput">
                        <input type="password" placeholder="Password" />
                        <span className="material-icons-outlined"> lock </span>
                    </div>

                    <div className="textInput">
                        <input type="password" placeholder="Confirm password" />
                        <span className="material-icons-outlined"> lock_clock </span>
                    </div>

                    <div className="button">
                        <span>Submit now</span>
                    </div>

                    <div className="info">
                        Already have an account? <a href="#">Login</a>
                    </div>
                </form>
            </div>
        </>
    )
}
