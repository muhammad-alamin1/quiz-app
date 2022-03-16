import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function PrivateRoute({ children }) {
    const { currUser } = useAuth();

    if (currUser) {
        return children;
    }
    return <Navigate to="/login" />
}

