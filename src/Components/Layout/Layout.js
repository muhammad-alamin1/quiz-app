import React from 'react';
import Nav from '../Nav/Nav';
import './layout.css';

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main className="main">
                <div className="container">
                    {
                        children
                    }
                </div>
            </main>
        </>
    )
}
