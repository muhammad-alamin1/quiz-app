
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import './signup.css';

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    let history = useNavigate();

    // submit form 
    const handleSubmit = async (event) => {
        event.preventDefault();

        // check password and confirm password is equal 
        if (password !== confirmPassword) {
            return setError(`Password doesn't matched.!`);
        }

        try {
            setError("");
            setLoading(true);

            await signup(email, password, username);

            history('/');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Failed create an account.!');
        }
    }

    return (
        <>
            <div className="column">
                <h3>Create an account</h3>
                <form className="signup form" action="#" onSubmit={handleSubmit} >
                    <div className="textInput">
                        <input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        <span className="material-icons-outlined"> person </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="Username (unique)" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <span className="material-icons-outlined"> person </span>
                    </div>

                    <div className="textInput">
                        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className="material-icons-outlined"> alternate_email </span>
                    </div>

                    <div className="textInput">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span className="material-icons-outlined"> lock </span>
                    </div>

                    <div className="textInput">
                        <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <span className="material-icons-outlined"> lock_clock </span>
                    </div>

                    {
                        error && <p className="error">{error}</p>
                    }

                    <button disabled={loading} className="button" type="submit" >
                        <span>Submit now</span>
                    </button>

                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </>
    )
}
