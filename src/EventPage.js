import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOutUser, auth } from './firebase';
import logo from './logo.svg';
import './EventPage.css'

const EventPage = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    return (
        <div className="eventpage">
            <nav className="navbar">
                <NavLink to="/homepage" className="navbar-logo-link">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </NavLink>
                <div className="navbar-links">
                    <NavLink to="/profile" className="navbar-link">Profile</NavLink>
                    <NavLink to="/events" className="navbar-link">Events</NavLink>
                    <NavLink to="/goingevent" className="navbar-link">Going Events</NavLink>
                    <button className="logout-button" onClick={handleSignOut}>Logout</button>
                </div>
            </nav>
            <div className="eventpage-content">
                <h1>Welcome to the Events Page!</h1>
            </div>
        </div>
    );
};

export default EventPage;