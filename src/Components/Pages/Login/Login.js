import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import './login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    let history = useNavigate();

    // submit the form
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError("");
            setLoading(true);

            await login(email, password);
            history('/');

        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(`Authentication Failed.!`);
        }

    }

    return (
        <>
            <div className="column">
                <h3>Sign In Your Account</h3> <br />
                <form className="login form" action="#" onSubmit={handleSubmit} >
                    <div className="textInput">
                        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className="material-icons-outlined"> alternate_email </span>
                    </div> <br />

                    <div className="textInput">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span className="material-icons-outlined"> lock </span>
                    </div> <br />

                    {
                        error && <p className="error">{error}</p>
                    }

                    <button disabled={loading} className="button" type="submit" >
                        <span>Sign In</span>
                    </button>

                    <div className="info">Don't have an account? <Link to="/signup">Signup</Link> </div>
                </form>
            </div>
        </>
    )
}
