import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function PublicRoute({ children }) {
    const { currUser } = useAuth();

    if (!currUser) {
        return children;
    }
    return <Navigate to="/" />
}

